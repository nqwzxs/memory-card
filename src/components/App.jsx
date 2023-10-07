import { useEffect, useState } from 'react'

import '../styles/App.css'

import Header from './Header'
import Scoreboard from './Scoreboard'
import CardGroup from './CardGroup'

const TOTAL_POKEMONS = 809
const INITIAL_CARD_AMOUNT = 4

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getRandomPokemons(INITIAL_CARD_AMOUNT)
  }, [])

  function incrementScore() {
    const incrementedScore = currentScore + 1
    setCurrentScore(incrementedScore)
    const newBestScore = Math.max(incrementedScore, bestScore)
    setBestScore(newBestScore)
  }

  async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return {
      id: data.id,
      name: data.name,
      spriteUrl: data.sprites.front_default,
    }
  }

  async function getRandomPokemons(amount) {
    const randomIds = []

    while (randomIds.length < amount) {
      const randomId = Math.floor(Math.random() * TOTAL_POKEMONS) + 1
      if (randomIds.includes(randomId)) continue
      randomIds.push(randomId)
    }

    setPokemons(await Promise.all(randomIds.map(getPokemon)))
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
