import '../App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Display />
          <ButtonPanel />
        </header>
      </div>
    </>
  );
}

export default App;
