import '../styles/Card.css'

function Card({ pokemon, onClick }) {
  return (
    <button className="card" onClick={() => onClick(pokemon)}>
      <img src={pokemon.spriteUrl} />
      <p>{pokemon.name}</p>
    </button>
  )
}

export default Card
