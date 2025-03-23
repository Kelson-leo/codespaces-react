import React, { useState } from 'react';
import './App.css';
import Item from './Item';

function App() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let item = new Item(text);
    setItems([...items, item])
  };

  return (<div className='container'>
      <h1>Todo List</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List items={items}></List>
    </div>
  );
}

function List(props) {
  return(
      <ul>
          {props.items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
  )
}

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  };

  function addItem(event) {
    event.preventDefault();
    if(text) {
      props.onAddItem(text);
      setText("");
    }    
  };

  return(
    <form>
      <input onChange={handleChange} type='text' value={text}></input>
      <button onClick={addItem}>Adicionar</button>
    </form>
  )
}

export default App;
