import Card from './Card'

function CardGroup({ pokemons }) {
  return (
    <div className="card-group">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default CardGroup
