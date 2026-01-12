import './App.css';
import Board from '../Board';
import TurnDisplay from '../TurnDisplay';
import CheckDisplay from '../CheckDisplay';
import { useState } from 'react';

function App() {
  const [isBlackTurn, setIsBlackTurn] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isCheckmate, setIsCheckmate] = useState(false);

  return (
    <div className="App">
      <TurnDisplay isBlackTurn={isBlackTurn}></TurnDisplay>
      <CheckDisplay isCheck={isCheck} isCheckmate={isCheckmate}></CheckDisplay>
      <Board
        isBlackTurn={isBlackTurn}
        setTurn={setIsBlackTurn}
        isCheck={isCheck}
        setCheck={setIsCheck}
        setCheckmate={setIsCheckmate}>
      </Board>
    </div>
  );
}

export default App;
