import './App.css';
import { useQuery } from "@tanstack/react-query"
import Axios from "axios"
import { useToggle } from './useToggle';
// import { Cat } from './Cat';

function App() {
  const { data: catData } = useQuery(['cat'], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      return res.data;
    });
  });
  const [isVisible, toggle] = useToggle();
  const [isVisible1, toggle1] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
      <button onClick={toggle1}>
        {isVisible1 ? "Hide" : "Show"}
      </button>
      {isVisible1 && <h1>Hidden Text</h1>}
      <h1>Fact: {catData?.fact}</h1>
    </div>
  );
}

export default App;