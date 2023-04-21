import React from 'react';
import './App.css';
import MemoryCard from './components/memorycard';

function generateDeck () {
  const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"]
  let deck = []
  for (let i = 0; i < 16; i++) {
    deck.push({isFlipped : false, symbol: symbols[i % 8]});
    
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

  constructor() {
    super();
    this.state = { deck: generateDeck(), pickedCards: [] };
  }

  render() {
    // const cardsJSX = 
    return (
      <div className="App">
        <header className="App-header">
          <h3>Memory Game</h3>
          <p className="subtitle">Match cards to win</p>
        </header>
        <div className='row1'>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className='row2'>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className='row3'>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className='row4'>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }
};

export default App;
