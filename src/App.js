import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}
export default App;



// fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
//   console.log(data);
// });