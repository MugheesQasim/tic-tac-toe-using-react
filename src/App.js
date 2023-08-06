import './App.css';
import Header from "./components/Header"
import Board from "./components/Board"
import ResetButton from './components/ResetButton';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flex-display">
      <Board/>
      <ResetButton/>
      </div>
    </div>
  );
}

export default App;
