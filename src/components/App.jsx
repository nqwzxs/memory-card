import { useState } from 'react'

import '../styles/App.css'

import Header from './Header'
import Scoreboard from './Scoreboard'
import CardGroup from './CardGroup'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [pokemons, setPokemons] = useState([])

  function incrementScore() {
    const incrementedScore = currentScore + 1
    setCurrentScore(incrementedScore)
    const newBestScore = Math.max(incrementedScore, bestScore)
    setBestScore(newBestScore)
  }

  return (
    <>
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardGroup pokemons={pokemons} />
    </>
  )
}

export default App
