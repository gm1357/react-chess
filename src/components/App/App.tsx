import './App.css';
import Board from '../Board';
import TurnDisplay from '../TurnDisplay';
import CheckDisplay from '../CheckDisplay';
import { useState } from 'react';

function App() {
  const [isBlackTurn, setIsBlackTurn] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="App">
      <TurnDisplay isBlackTurn={isBlackTurn}></TurnDisplay>
      <CheckDisplay isCheck={isCheck}></CheckDisplay>
      <Board
        isBlackTurn={isBlackTurn}
        setTurn={setIsBlackTurn}
        isCheck={isCheck}
        setCheck={setIsCheck}>
      </Board>
    </div>
  );
}

export default App;
