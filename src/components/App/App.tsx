import './App.css';
import Board from '../Board';
import TurnDisplay from '../TurnDisplay';
import { useState } from 'react';

function App() {
  const [isBlackTurn, setIsBlackTurn] = useState(false);

  return (
    <div className="App">
      <TurnDisplay isBlackTurn={isBlackTurn}></TurnDisplay>
      <Board isBlackTurn={isBlackTurn} setTurn={setIsBlackTurn}></Board>
    </div>
  );
}

export default App;
