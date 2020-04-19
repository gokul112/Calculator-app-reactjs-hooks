import React from 'react';
import '../App.css';

const Keypad = (props) => {
    const onclickvalue = (e) => {
        e.preventDefault();
        props.handleChange(e.target.value);
    }

    return( 
            <button type="button" className={props.id} value={props.value} onClick={onclickvalue}>{props.value}</button>
    )
}
export default Keypad;