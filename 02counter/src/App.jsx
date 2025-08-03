import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15); //you can write anything instead of counter and setCounter
  // let counter = 0;
  const addValue = () => {
    //counter=counter+1
    counter = counter + 1;
    if (counter <= 20) {
      setCounter(counter);
      console.log("value added", counter);
    } else {
      console.log("No more values can be added");
    }
  };
  const removeValue = () => {
    counter = counter - 1;
    if (counter >= 0) {
      setCounter(counter);
      console.log("value removed", counter);
    } else {
      console.log("No more values can be removed");
    }
  };
  return (
    <>
      <h1>React Counter project</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
