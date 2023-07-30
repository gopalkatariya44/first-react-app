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

Ex 4
```
import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);


  function increseAge(params) {
    setAge(age + 1)
    console.log(age);
  }
  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={increseAge}>Increse Age</button>
    </div>
  );
}

export default App;
```

```
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value)
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={handleInputChange}></input>
      <h4>{inputValue}</h4>
    </div>
  );
}

export default App;
```
hide show text
```
import './App.css';
import { useState } from 'react';

function App() {
  const [isShow, onShowHide] = useState(false);

  function showHide(event) {
    onShowHide(!isShow)
    console.log(isShow);
  }
  return (
    <div className="App">
      <button onClick={showHide}>Hide/Show</button>
      {isShow === true && <h1>Gopal</h1>}
    </div>
  );
}

export default App;
```

#### Change color of the text
```
import './App.css';
import { useState } from 'react';

function App() {
  const [textColor, setTextColor] = useState("black");

  function showHide(event) {
    setTextColor(textColor === 'black' ? "red" : "black")
    console.log(textColor);
  }
  return (
    <div className="App">
      <button onClick={showHide}>Hide/Show</button>
      <h1 style={{ color: textColor }}>Gopal</h1>
    </div>
  );
}

export default App;
```

#### increse decrese count
```
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increse(event) {
    setCount(count + 1)
    console.log(count);
  }
  function decrese(event) {
    setCount(count - 1)
    console.log(count);
  }
  function setToZero(event) {
    setCount(0)
    console.log(count);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increse}> + increse </button><br />
      <button onClick={decrese}> - decrese</button><br />
      <button onClick={setToZero}> set to 0 </button><br />
    </div>
  );
}

export default App;
```

```
```

```
```