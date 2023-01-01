import './index.css'

const WinOrLoseCard = props => {
  const {result, score, playAgain} = props
  const back = () => {
    playAgain()
  }
  if (result === 'win') {
    return (
      <div className="win-lose-card">
        <div className="win-lose-text-container">
          <h1 className="win-lose-heading">You Won</h1>
          <p className="win-lose-parag">Best Score</p>
          <p className="win-lose-score">12/12</p>
          <button type="button" className="play-again" onClick={back}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="win-lose-image"
          alt="win or lose"
        />
      </div>
    )
  }
  return (
    <div className="win-lose-card">
      <div className="win-lose-text-container">
        <h1 className="win-lose-heading">You Lose</h1>
        <p className="win-lose-parag">Score</p>
        <p className="win-lose-score">{score}/12</p>
        <button type="button" className="play-again" onClick={back}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="win-lose-image"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
