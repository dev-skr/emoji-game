import './index.css'

const NavBar = props => {
  const {clickedEmojis, result, topScore} = props
  let p1
  let p2
  if (clickedEmojis.length === 0 && topScore === 0) {
    p1 = <p className="score">Score: 0</p>
    p2 = <p className="score">Top Score: 0</p>
  } else {
    p1 = <p className="score">Score: {clickedEmojis.length}</p>
    p2 = <p className="score">Top Score: {topScore}</p>
  }
  if (result === 'win' || result === 'loose') {
    p1 = ''
    p2 = ''
  }
  let displayScores
  if (result !== '') {
    displayScores = 'win-lose-display'
  } else {
    displayScores = ''
  }
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className={`scores-container ${displayScores}`}>
        {p1}
        {p2}
      </div>
    </nav>
  )
}

export default NavBar
