import React from 'react';
import './App.css';
import MemoryCard from './components/memorycard';

function generateDeck() {
  const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"]
  let deck = []
  for (let i = 0; i < 16; i++) {
    deck.push({ isFlipped: false, symbol: symbols[i % 8] });

  }
  shuffle(deck)
  return (deck)
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = { ...this.state.deck[cardIndex], isFlipped: true }
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      }
      return card;
    });
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0]
      let card2Index = newPickedCards[1]

      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        console.log("cards don't match")
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
      }
      newPickedCards = []
    }
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  }

  unflipCards(card1Index, card2Index) {
    console.log("HELLO?!")
    let card1 = { ...this.state.deck[card1Index], isFlipped: false }
    let card2 = { ...this.state.deck[card2Index], isFlipped: false }
    console.log(card1, card2)
    let newDeck = this.state.deck.map((card, index) => {
      console.log(card)
      if (card1.symbol === card.symbol) {
        return card1
      }
      if (card2.symbol === card.symbol) {
        return card2
      }
      return card;
    });
    this.setState({
      deck: newDeck,
    })
  }

  constructor() {
    super();
    this.state = { deck: generateDeck(), pickedCards: [] };
  }

  render() {

    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}
      />
    });

    return (
      // game title
      <div className="App">
        <header className="App-header">
          <h3>Memory Game</h3>
          <p className="subtitle">Match cards to win</p>
        </header>
        {/* memory card divs */}
        <div className="row_1">
          {cardsJSX.slice(0, 4)}
        </div>
        <div className="row_2">
          {cardsJSX.slice(4, 8)}
        </div>
        <div className="row_3">
          {cardsJSX.slice(8, 12)}
        </div>
        <div className="row_4">
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
  }
};

export default App;
