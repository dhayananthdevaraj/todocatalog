import React from 'react';


function TodoItem({ todo, editTodo, toggleComplete, deleteTodo }) {
  const handleEditTodo = (e) => {
    editTodo(todo.id, e.target.value);
  };

  return (
    <div className='list'>
    <li>
      <input type="text" value={todo.text} onChange={handleEditTodo} />
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
    </div>
  );
}

export default TodoItem;
