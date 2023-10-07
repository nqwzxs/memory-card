import { useEffect, useState } from 'react'

import '../styles/App.css'

import Header from './Header'
import Scoreboard from './Scoreboard'
import CardGroup from './CardGroup'

const TOTAL_POKEMONS = 809
const INITIAL_CARD_AMOUNT = 4
const INCREMENT_AMOUNT = 2

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [clickedPokemons, setClickedPokemons] = useState([])

  useEffect(() => {
    getRandomPokemons(INITIAL_CARD_AMOUNT)
  }, [])

  function incrementScore() {
    const incrementedScore = currentScore + 1
    setCurrentScore(incrementedScore)
    const newBestScore = Math.max(incrementedScore, bestScore)
    setBestScore(newBestScore)
  }

  function resetGame() {
    getRandomPokemons(INITIAL_CARD_AMOUNT)
    setClickedPokemons([])
    setCurrentScore(0)
  }

  const handleCardClick = (pokemon) => {
    if (clickedPokemons.includes(pokemon)) {
      resetGame()
      return
    }

    const newClickedPokemons = [...clickedPokemons, pokemon]

    setClickedPokemons([...clickedPokemons, pokemon])
    incrementScore()

    if (newClickedPokemons.length === pokemons.length) {
      getRandomPokemons(pokemons.length + INCREMENT_AMOUNT)
      setClickedPokemons([])
      return
    }
    shufflePokemons()
  }

  function shufflePokemons() {
    const shuffledPokemons = []

    while (shuffledPokemons.length !== pokemons.length) {
      const randomIndex = Math.floor(Math.random() * pokemons.length)
      const randomPokemon = pokemons[randomIndex]
      if (shuffledPokemons.includes(randomPokemon)) continue
      shuffledPokemons.push(randomPokemon)
    }

    setPokemons(shuffledPokemons)
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
      <CardGroup pokemons={pokemons} handleCardClick={handleCardClick} />
    </>
  )
}

export default App
