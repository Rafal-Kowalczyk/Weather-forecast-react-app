import React from 'react';
import './Form.css';

const Form = (props) => {

    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="Wpisz wyszukiwane miasto"
            />
            <button>Wyszukaj</button>
        </form>
    )
}


export default Form;