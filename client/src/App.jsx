import React, { useState } from 'react';
import './App.css';
import { BiSolidTrashAlt } from 'react-icons/bi';

import TodoForm from './components/todoForm';

function App() {
  const [text, setText] = useState('');
  const [todoLists, setTodoLists] = useState([]);

  const removeText = (id) => {
    setTodoLists(todoLists.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoForm text={text} setText={setText} className="todoForm" todoLists={todoLists} setTodoLists={setTodoLists} />
      <div className="todoListItems">
        {todoLists.map((item) => {
          return (
            <div className="listItems" key={item.id}>
              <p>{item.todoName}</p>
              <button onClick={() => removeText(item.id)}>
                <BiSolidTrashAlt />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
