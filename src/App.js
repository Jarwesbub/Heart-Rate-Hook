import './App.css';
import {useState} from 'react';

function App() {
  const[age, setAge] = useState(0);
  const[low, setLow] = useState(0);
  const[high, setHigh] = useState(0);

  function calculateHeartRate(){
    setLow((220-age)*0.65);
    setHigh((220-age)*0.85);
  }
  return (
    <div>
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
        <div> <label>Age</label> </div>
          <input value={age} onChange={e => setAge(e.target.value)} />
            </div>
          <div>
          <div> <label>Heart rate limits</label> </div>
          <p></p>
            <output>{low.toFixed(2)}-{high.toFixed(2)}</output>
          </div>
          <button type="button" onClick={calculateHeartRate}>Calculate</button>
      </form>
    </div>
  );
}


export default App;
