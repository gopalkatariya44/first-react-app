import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setAge(res.data);
    });
  };

  return (
    <div className="App">
      <input placeholder='Ex. Gopal...' onChange={(event) => {
        setName(event.target.value)
      }} />
      &nbsp;
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name: {age?.name}</h1>
      <h1>Predicted Age: {age?.age}</h1>
      <h1>Count: {age?.count}</h1>
    </div>
  );
}
export default App;



// fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
//   console.log(data);
// });