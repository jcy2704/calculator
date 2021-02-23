import '../App.css';
import Display from './Display';
// import Button from './Button';
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
