import { isToday } from '../lib/utils'
import { allowed } from './data.allowed-guesses'
import { words } from './data.words'

const GREEN = 'green'
const YELLOW = 'yellow'
const GRAY = 'gray'

const Wordle = {
  // TODO: FIX THIS
  getAnswer(date: Date) {
    let index = 3

    if (isToday(date)) index = 0

    return words[index]
  },
  getResult(guess: string, date: Date): string[] | null {
    const answer = this.getAnswer(date)
    return this.check(guess, answer)
  },
  check(guess: string, answer: string): string[] | null {
    guess = guess.toLowerCase()
    if (!this.isValidGuess(guess)) {
      console.log(`${guess.toUpperCase()} is not a valid guess`)
      return null
    }

    const result = []
    const toCheck = answer.split('')

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        result.push(GREEN)
        toCheck[i] = '*'
      } else {
        result.push('*')
      }
    }

    for (let i = 0; i < guess.length; i++) {
      const index = toCheck.indexOf(guess[i])
      if (result[i] === '*' && index !== -1) {
        result[i] = YELLOW
        toCheck[index] = '*'
      } else if (result[i] === '*') {
        result[i] = GRAY
      }
    }

    return result
  },
  isValidGuess(guess: string): boolean {
    return words.includes(guess) || allowed.includes(guess)
  },
}

export default Wordle
