import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  };

  function addItem(event) {
    event.preventDefault();
    if(text) {
      setItems([...items, text]);
      setText("");
    }    
  };

  return (<div className='container'>
      <h1>Todo List</h1>
      <form>
        <input onChange={handleChange} type='text' value={text}></input>
        <button onClick={addItem}>Adicionar</button>
        </form>
        <List items={items}></List>
    </div>
  );
}

function List(props) {
  return(
      <ul>
          {props.items.map(item => <li>{item}</li>)}
      </ul>
  )
}

export default App;
