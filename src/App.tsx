//TODO: LONGER WORDS for a true MMO challenge

// localStorage:
//    lastPlayed: "dd mm yyyy"
//    guess: ""

import usePlayedToday from './hooks/usePlayedToday'

function App() {
  const { hasPlayed, played } = usePlayedToday()

  return (
    <div>
      <h1>Hello World(le)</h1>
      <p>{hasPlayed && "You've already played today"}</p>
      <button
        onClick={(e) => {
          played()
        }}
      >
        Play
      </button>
    </div>
  )
}

export default App
