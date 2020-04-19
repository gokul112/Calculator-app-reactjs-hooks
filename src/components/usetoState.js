 import {useState} from 'react';
 import { evaluate } from 'mathjs';


export default (initialState) => {

    const data = [
        {id:"1",value:"1"},
        {id:"2",value:"2"},
        {id:"3",value:"3"},
        {id:"4",value:"4"},
        {id:"5",value:"5"},
        {id:"6",value:"6"},
        {id:"7",value:"7"},
        {id:"8",value:"8"},
        {id:"9",value:"9"},
        {id:"0",value:"0"},
        {id:"add",value:"+"},
        {id:"sub",value:"-"},
        {id:"multi",value:"*"},
        {id:"div",value:"/"},
        {id:"deci",value:"."},
        {id:"equal",value:"="},
        {id:"clear",value:"Clear"},
        {id:"AC",value:"AC"}
        ]

    const [keyInput,setKeyInput] = useState(initialState);

    return{
    keyInput,
    setInput : (e) => {
        setKeyInput(e.target.value)
    }
    ,handleChange : (handleChange) => {
      switch(handleChange) {
        case '=':
            try{
              setKeyInput(evaluate(keyInput));     
            } catch(e){
              alert("error");
            }
            break;
        case "Clear":
            if(keyInput.length>0) 
              setKeyInput(keyInput.substring(0, keyInput.length - 1));
            break;
        case "AC":
            setKeyInput("");
            break;
        default:
            setKeyInput(prevState => prevState + handleChange );
            break;
      }
    },
    data
  };
}
