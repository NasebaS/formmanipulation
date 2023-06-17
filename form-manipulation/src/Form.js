import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';

const Form = () => {
 
    const [text, setText] = useState('');
  const [dob, setDob] = useState('');
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addText = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: text, dob: dob }]);
    setText('');
    setDob('');
  };

  const viewText = () => {
    navigate('/view', { state: { todos:todos } });
  };


  return (
    <div className="App">
    <div className='container'>
      <form onSubmit={addText}>
        <label>Name:</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <br /><br />
        <label>Date Of Birth:</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        <br /><br /><br /><br />
        <button type="submit" className='btn'>Add</button>
        <br /><br /><br /><br />
        <button className='btn' onClick={viewText}>View</button>
      </form>
      <div className='maindiv'>
        {todos.map((item, id) => (
          <ul key={id}>
            <li>{item.text}</li>
            <li>{item.dob}</li>
          </ul>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Form