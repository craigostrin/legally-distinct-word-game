import { allowed } from './data.allowed-guesses'
import { words } from './data.words'

const GREEN = '🟩'
const YELLOW = '🟨'
const GRAY = '⬜️'

const Wordle = {
  check(guess: string, answer: string): string[] | null {
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
