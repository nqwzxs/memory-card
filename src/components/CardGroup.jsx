import '../styles/CardGroup.css'

import Card from './Card'

function CardGroup({ pokemons, handleCardClick }) {
  return (
    <div className="card-group">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} onClick={handleCardClick} />
      ))}
    </div>
  )
}

export default CardGroup
