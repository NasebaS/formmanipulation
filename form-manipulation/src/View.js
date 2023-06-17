import React from 'react'
import {useLocation} from 'react-router-dom'



const View = () => {
    const location = useLocation();
    const { todos } = location.state;
  
    return (
      <div className='maindiv'>
        {todos.map((item, id) => (
          <ul key={id}>
            <li>{item.text}</li>
            <li>{item.dob}</li>
          </ul>
        ))}
      </div>
    );
  };


export default View