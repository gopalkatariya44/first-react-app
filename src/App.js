import './App.css';

function App() {
  const names = [{ name: "gopal", is: true },
  { name: "parth", is: false },
  { name: "jainam", is: true },
  { name: "tanvi", is: false }];


  return (
    <div className="App">
      {names.map((user, key) =>
        user.is ? <User name={user.name} /> : <div></div>
      )}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};
export default App;