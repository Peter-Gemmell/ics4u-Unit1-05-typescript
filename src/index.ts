/**
 * The program makes rock paper scissors
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Constants
const boardSize = 144.0

/**
 * @param {number} height Height of the wood
 * @param {number} width Weight of the wood
 * @returns {number} length Length of the wood
 */
function calcLength(height: number, width: number): number {
  const length = boardSize / (height * width)
  return length
}

try {
  const userWidth = prompt('Input your height: ')
  const width = parseFloat(userWidth)
  const userHeight = prompt('Input your width: ')
  const height = parseFloat(userHeight)

  if (isNaN(height) || isNaN(width)) {
    console.log('Invalid Input')
  } else {
    console.log(`The wood should be ${calcLength(height, width)} inch(es) long`)
  }
} catch (e) {
  console.log('Not an acceptable input')
}

console.log('\nDone.')
