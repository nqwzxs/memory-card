function Card({ pokemon }) {
  return (
    <button className="card">
      <img src={pokemon.spriteUrl} />
      <p>{pokemon.name}</p>
    </button>
  )
}

export default Card
