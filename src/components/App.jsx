import '../styles/App.css'

import Header from './Header'
import Scoreboard from './Scoreboard'
import CardGroup from './CardGroup'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <>
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardGroup />
    </>
  )
}

export default App
