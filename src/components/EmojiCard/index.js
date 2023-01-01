import './index.css'

const EmojiCard = props => {
  const {name, url, id, clickedEmoji} = props
  const sendId = () => {
    clickedEmoji(id)
  }
  return (
    <li className="emoji-item" onClick={sendId}>
      <button type="button" className="emoji-button">
        <img src={url} alt={name} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
