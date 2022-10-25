import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
import { ReduxTimer } from './components/ReduxTimer';

function App() {
  return (
    <div className="App">
      <Timer />
      <ReduxTimer />
    </div>
  );
}

export default App;
