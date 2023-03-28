import './App.css';
import SelectFC from './components/Select';

function App() {
  return (
    <div className="App">
      <h1>Jobs at <br/> Bending Spoons</h1>
      <div className="horizontal_align">
        <SelectFC/>
      </div>
    </div>
  );
}

export default App;
