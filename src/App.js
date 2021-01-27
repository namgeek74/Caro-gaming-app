import React, { useState, useEffect } from 'react';
import Cell from './components/Cell';
import { checkWin } from './logic/app-global';

function App() {
  let arr = [];
  let data = []
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      let temp = i.toString() + j.toString();
      arr.push(temp);
      data.push(null);
    }
  }
  const [value, setValue] = useState(data);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [currentIndex, setCurrentIndex] = useState();
  const [winner, setWinner] = useState();


  useEffect(() => {
    setWinner(checkWin(currentIndex, value));
  });

  function handleClick(currentValue, index) {
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
          arr.map((item, index) => (
            <Cell key={item} number={item} value={value[index]} index={index} valueChange={handleClick} />
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
