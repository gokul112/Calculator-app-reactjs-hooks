import React from 'react';
import '../App.css';
import Header from './Header';
import Keypad from './Keypad';
import usetoState from './usetoState';


function App() {

  const {keyInput,handleChange,setInput,data} = usetoState("");

  return (
    <div className="App">
        <Header title="Calculator App"/>
        <div className="keypad">
          <div className="key-input">
            <input type="text" name="keyinput" value={keyInput} onChange={setInput} />
          </div>
          {data.map((val)=>(
            <Keypad key={val.id} id={val.id} value={val.value} handleChange={handleChange}/>
          ))}
        </div>
    </div>
  );
}

export default App;
