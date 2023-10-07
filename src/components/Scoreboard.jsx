function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      Score: {currentScore} | Best score: {bestScore}
    </div>
  )
}

export default Scoreboard
