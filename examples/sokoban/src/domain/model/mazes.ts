import { Maze } from './'

export const maze0: Maze = [
  ['_', '_', '_', '_', 'X', 'X', 'X', 'X', 'X', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', 'X', ' ', ' ', ' ', 'X', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', 'X', 'B', ' ', ' ', 'X', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', 'X', 'X', 'X', ' ', ' ', 'B', 'X', 'X', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', 'X', ' ', ' ', 'B', ' ', 'B', ' ', 'X', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['X', 'X', 'X', ' ', 'X', ' ', 'X', 'X', ' ', 'X', '_', '_', '_', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', ' ', ' ', ' ', 'X', ' ', 'X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', ' ', ' ', 'O', 'O', 'X'],
  ['X', ' ', 'B', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', 'O', 'X'],
  ['X', 'X', 'X', 'X', 'X', ' ', 'X', 'X', 'X', ' ', 'X', '>', 'X', 'X', ' ', ' ', 'O', 'O', 'X'],
  ['_', '_', '_', '_', 'X', ' ', ' ', ' ', ' ', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['_', '_', '_', '_', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '_', '_', '_', '_', '_', '_', '_', '_'],
]

export const maze1: Maze = [
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '_', '_'],
  ['X', 'O', 'O', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', 'X', 'X', 'X'],
  ['X', 'O', 'O', ' ', ' ', 'X', ' ', 'B', ' ', ' ', 'B', ' ', ' ', 'X'],
  ['X', 'O', 'O', ' ', ' ', 'X', 'B', 'X', 'X', 'X', 'X', ' ', ' ', 'X'],
  ['X', 'O', 'O', ' ', ' ', ' ', ' ', '^', ' ', 'X', 'X', ' ', ' ', 'X'],
  ['X', 'O', 'O', ' ', ' ', 'X', ' ', 'X', ' ', ' ', 'B', ' ', 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', ' ', 'X', 'X', 'B', ' ', 'B', ' ', 'X'],
  ['_', '_', 'X', ' ', 'B', ' ', ' ', 'B', ' ', 'B', ' ', 'B', ' ', 'X'],
  ['_', '_', 'X', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['_', '_', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
]

export const maze2: Maze = [
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', 'X', ' ', ' ', ' ', ' ', ' ', '<', 'X', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', 'X', ' ', 'B', 'X', 'B', ' ', 'X', 'X', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', 'X', ' ', 'B', ' ', ' ', 'B', 'X', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', 'X', 'X', 'B', ' ', 'B', ' ', 'X', '_', '_'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', ' ', 'B', ' ', 'X', ' ', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'O', 'O', ' ', ' ', ' ', 'X', 'X', ' ', 'B', ' ', ' ', 'B', ' ', ' ', 'X'],
  ['X', 'X', 'O', 'O', 'O', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' ', 'B', ' ', ' ', ' ', 'X'],
  ['X', 'O', 'O', 'O', 'O', ' ', ' ', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
]

export const simpleTest: Maze = [
  ['X', 'X', 'X', 'X', 'X'],
  ['X', '>', 'B', 'O', 'X'],
  ['X', 'X', 'X', 'X', 'X'],
]

export const mazes = [maze0, maze1, maze2]
