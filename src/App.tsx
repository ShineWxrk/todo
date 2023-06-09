import React, { useState } from 'react';
import './App.css';
import { TodoItem } from './components/TodoItem'
import { defaultTodos } from './mock';
import { Todo } from './types/todo';

function App() {

  enum FilterOption {
    All = 'all',
    CompletedOnly = 'completed',
    NotCompletedOnly = 'not-completed'
  }

  const [todos, setTodos] = useState<Todo[]>(defaultTodos)
  const [filterOption, setFilterOption] = useState(FilterOption.All);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (!inputValue) return;
    const newTodo: Todo = {
      id: Date.now().toLocaleString(),
      title: inputValue,
      completed: false,
    };
    setInputValue('');
    setTodos([...todos, newTodo]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const toggleTodo = (todos: Todo[], todoId: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    return updatedTodos;
  };

  function handleDelete(todoId: string) {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  const completedTodos = todos.filter(todo => !todo.completed);

  const handleAllClick = () => {
    setFilterOption(FilterOption.All);
  };

  const handleCompletedOnlyClick = () => {
    setFilterOption(FilterOption.CompletedOnly);
  };

  const handleNotCompletedOnlyClick = () => {
    setFilterOption(FilterOption.NotCompletedOnly);
  };
  
  const filteredList = todos.filter(todo => {
    switch (filterOption) {
      case FilterOption.CompletedOnly:
        return todo.completed;
      case FilterOption.NotCompletedOnly:
        return !todo.completed;
      default:
        return true;
    }
  });

  function handleClearCompleted() {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="logo">todos</h1>
        <input className="input" type="text" placeholder='Todo name' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
        <div className="todos">
        {filteredList.map((todo)=>(
          <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} 
          onToggle={() => setTodos(toggleTodo(todos, todo.id))}
          onRemove={() => handleDelete(todo.id)}></TodoItem>
        ))}
        </div>
        <div className='info'>
          <div>
            <p>{completedTodos.length} items left</p>
          </div>
          <div className='buttons'>
            <button className={`button ${filterOption === FilterOption.All ? 'active' : ''}`} onClick={handleAllClick}>All</button>
            <button className={`button ${filterOption === FilterOption.NotCompletedOnly  ? 'active' : ''}`} onClick={handleNotCompletedOnlyClick}>Active</button>
            <button className={`button ${filterOption === FilterOption.CompletedOnly  ? 'active' : ''}`} onClick={handleCompletedOnlyClick}>Completed</button>
          </div>
          <div>
            <button className='button' onClick={handleClearCompleted}>Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
