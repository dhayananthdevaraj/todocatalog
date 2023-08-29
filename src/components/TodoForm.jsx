import React, { useState } from 'react';


function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreateTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      addTodo(newTodo);
      setInputValue('');
    }
  };

  return (
    <div className='todo'>
      <input type="text" value={inputValue} placeholder="Enter a task"onChange={handleInputChange} />
      <button onClick={handleCreateTodo}> Add</button>
    </div>
  );
}

export default TodoForm;
