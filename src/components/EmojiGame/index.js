/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {emojis: [], clickedEmojis: [], result: '', topScore: 0}

  setter = list => {
    this.setState({emojis: list})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmoji = id => {
    const {clickedEmojis, emojis, topScore} = this.state
    const shuffledList = this.shuffledEmojisList()
    if (clickedEmojis.length === 0) {
      this.setState({clickedEmojis: [id], emojis: shuffledList})
    } else if (clickedEmojis.length < emojis.length - 1) {
      if (clickedEmojis.includes(id)) {
        if (topScore < clickedEmojis.length) {
          this.setState({result: 'loose', topScore: clickedEmojis.length})
        } else {
          this.setState({result: 'loose'})
        }
      } else {
        this.setState(prev => ({
          clickedEmojis: [...prev.clickedEmojis, id],
          emojis: shuffledList,
        }))
      }
    } else {
      if (clickedEmojis.includes(id)) {
        if (topScore < clickedEmojis.length) {
          this.setState({result: 'loose', topScore: clickedEmojis.length})
        } else {
          this.setState({result: 'loose'})
        }
      }
      this.setState({result: 'win', topScore: emojis.length})
    }
  }

  getEmojis = () => {
    const {emojis} = this.state
    return emojis.map(each => (
      <EmojiCard
        key={each.id}
        name={each.emojiName}
        url={each.emojiUrl}
        id={each.id}
        clickedEmoji={this.clickedEmoji}
      />
    ))
  }

  playAgain = () => {
    this.setState({clickedEmojis: [], result: ''})
  }

  render() {
    const {emojisList} = this.props
    const {emojis, clickedEmojis, result, topScore} = this.state
    if (emojis.length === 0) {
      this.setter(emojisList)
    }
    let card
    if (result === '') {
      card = this.getEmojis()
    } else if (result === 'loose') {
      card = (
        <WinOrLoseCard
          result="loose"
          score={clickedEmojis.length}
          playAgain={this.playAgain}
        />
      )
    } else {
      card = (
        <WinOrLoseCard
          result="win"
          playAgain={this.playAgain}
          score={clickedEmojis.length}
        />
      )
    }
    return (
      <div className="bg">
        <NavBar
          clickedEmojis={clickedEmojis}
          result={result}
          topScore={topScore}
        />
        <ul className="emoji-container">{card}</ul>
      </div>
    )
  }
}

export default EmojiGame
