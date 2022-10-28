import './App.css';
import { useState} from "react";
import GuessedWord from "./component/guessedWord";
import MessageBox from "./component/messageBox";
import Input from "./component/input";

function App() {

    const [counter,setCounter]=useState(0);

  return (
    <div data-test={"container"}>
      <h1 data-test={"counter"}>your counter is: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)} data-test={"increaseBtn"}>increase</button>
        <p>-----------------------</p>
        <Input/>
        <MessageBox/>
        <GuessedWord/>
    </div>
  );
}

export default App;
