Ex 1
```
import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Gopal" age={22} email="gopal@gmail.com" />
      <User name="Parth" age={16} email="parth@gmail.com" />
      <User name="Jenisha" age={16} email="jenisha@gmail.com" />
    </div> 
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};
export default App;
```
ex 2
```
import './App.css';

function App() {
  const age = 22;
  const isGreen = true;


  return (
    <div className="App">
      <h1>{age >= 18 ? "Under Age" : "Over Age"}</h1>
      <h1 style={{ color: isGreen ? "green" : "red" }}>This Has Color</h1>
      {isGreen && <button>Submit</button>}
    </div>
  );
}
export default App;
```

```
import './App.css';

function App() {
  const names = [{ name: "gopal", age: 22 },
  { name: "parth", age: "21" },
  { name: "jainam", age: "23" },
  { name: "tanvi", age: "22" }];


  return (
    <div className="App">
      {names.map((user, key) => {
        return <User name={user.name} age={user.age} />
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};
export default App;
```

```
```

```
```

```
```