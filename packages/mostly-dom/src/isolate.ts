import { Component, Stream } from '@motorcycle/types'
import { DomSinks, DomSources } from './'

import { VNode } from 'mostly-dom'
import { join } from '167'
import { tap } from '@motorcycle/stream'

/**
 * Isolates a component by adding an isolation class name to the outermost
 * DOM element emitted by the component’s view stream.
 *
 * The isolation class name is generated by appending the given isolation `key`
 * to the prefix `$$isolation$$-`, e.g., given `foo` as `key` produces
 * `$$isolation$$-foo`.
 *
 * Isolating components are useful especially when dealing with lists of a
 * specific component, so that events can be differentiated between the siblings.
 * However, isolated components are not isolated from access by an ancestor DOM
 * element.
 *
 * @name isolate<Sources extends { readonly dom: DomSource }, Sinks extends { readonly view$: Stream<VNode> }>(component: Component<Sources, Sinks>, key: string): Component<Sources, Sinks>
 *
 * @example
 * const MyIsolatedComponent = isolate(MyComponent, `myIsolationKey`)
 * const sinks = MyIsolatedComponent(sources)
 */
export function isolate<Sources extends DomSources, Sinks extends DomSinks>(
  component: Component<Sources, Sinks>,
  key: string
): Component<Sources, Sinks> {
  return function isolatedComponent(sources: Sources) {
    const { dom } = sources
    const isolatedDom = dom.query(KEY_PREFIX + key)
    const sinks = component(Object.assign({}, sources, { dom: isolatedDom }))
    const isolatedSinks = Object.assign({}, sinks, { view$: isolateView(sinks.view$, key) })

    return isolatedSinks
  }
}

const KEY_PREFIX = `$$isolation$$-`

function isolateView(view$: Stream<VNode>, key: string) {
  const prefixedKey = KEY_PREFIX + key

  return tap(vNode => {
    const { props: { className: className = EMPTY_CLASS_NAME } } = vNode
    const needsIsolation = className.indexOf(prefixedKey) === -1

    if (needsIsolation)
      vNode.props.className = removeSuperfluousSpaces(
        join(CLASS_NAME_SEPARATOR, [className, prefixedKey])
      )
  }, view$)
}

const EMPTY_CLASS_NAME = ``
const CLASS_NAME_SEPARATOR = ` `

function removeSuperfluousSpaces(str: string): string {
  return str.replace(RE_TWO_OR_MORE_SPACES, CLASS_NAME_SEPARATOR)
}

const RE_TWO_OR_MORE_SPACES = /\s{2,}/g
