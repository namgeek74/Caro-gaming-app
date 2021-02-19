import React, { useState, useEffect } from 'react';
import Cell from './components/Cell';
import { checkWin } from './logic/app-global';

function App() {
  let data = []
  for (let i = 0; i < 100; i++) {
    data.push(null);
  }

  const [value, setValue] = useState(data);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [currentIndex, setCurrentIndex] = useState();
  const [winner, setWinner] = useState();

  useEffect(() => {
    setWinner(checkWin(currentIndex, value));
  });

  function handleClick(index) {
    setCurrentIndex(index)
    if (value[index]) return;

    let newData = [...value];
    newData[index] = currentPlayer;
    setValue(newData);

    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  }

  return (
    <div className="wrapper">
      <div className='game-container'>
        {
          data.map((item, index) => (
            <Cell key={index} value={value[index]} index={index} valueChange={handleClick} />
          ))
        }
      </div>
      <div className='result-container'>
        <h1>{winner}</h1>
      </div>
    </div>
  );
}

export default App;
