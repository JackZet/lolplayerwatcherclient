
import './App.css';
import Header from './components/Header'
import OPGG from './components/OPGG'
import SummonerName from './components/SummonerName';

function App() {
  const name = 'Jack'

  return (
    <div className="App">
      <Header/>
      <SummonerName/>
      <OPGG/>
    </div>
  );
}

export default App;
