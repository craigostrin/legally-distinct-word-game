import { Emoji, RESULTS, Result } from '../lib/constants'
import { isToday } from '../lib/utils'
import { allowed } from './data.allowed-guesses'
import { words } from './data.words-randomized'

const Game = {
  // TODO: FIX THIS
  getAnswer(date: Date): string {
    let index = 3

    if (isToday(date)) index = 0

    return words[index]
  },
  getResult(guess: string, date: Date): Result[] | null {
    const answer = this.getAnswer(date)
    return this.check(guess, answer)
  },
  result2emoji(result: Result[]): Emoji[] {
    return result.map((color) => RESULTS[color])
  },
  check(guess: string, answer: string): Result[] | null {
    guess = guess.toLowerCase()
    if (!this.isValidGuess(guess)) {
      console.log(`${guess.toUpperCase()} is not a valid guess`)
      return null
    }

    const result: (Result | '*')[] = []
    const toCheck = answer.split('')

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        result.push('green')
        toCheck[i] = '*'
      } else {
        result.push('*')
      }
    }

    for (let i = 0; i < guess.length; i++) {
      const index = toCheck.indexOf(guess[i])
      if (result[i] === '*' && index !== -1) {
        result[i] = 'yellow'
        toCheck[index] = '*'
      } else if (result[i] === '*') {
        result[i] = 'gray'
      }
    }

    return result as Result[]
  },
  isValidGuess(guess: string): boolean {
    return words.includes(guess) || allowed.includes(guess)
  },
}

export default Game
