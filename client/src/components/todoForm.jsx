import React from 'react';
import '../App.css';

const TodoForm = ({ text, setText, className, todoLists, setTodoLists }) => {
  const todoHandler = (e) => {
    e.preventDefault();

    setText('');
  };

  const addText = () => {
    if (todoLists.some((todo) => todo.todoName === text)) {
      alert('This todo already exists!');
    } else {
      const todo = {
        id: todoLists.length === 0 ? 1 : todoLists[todoLists.length - 1].id + 1,
        todoName: text,
      };

      setTodoLists([...todoLists, todo]);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={todoHandler}>
        <input type="text" placeholder="todo..." value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addText}>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
