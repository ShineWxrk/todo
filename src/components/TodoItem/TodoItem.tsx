import React from 'react';
import './TodoItem.css';

interface TodoProps { 
  id: string;
  title: string;
  completed: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export const TodoItem = ({ id, title, completed, onToggle, onRemove }: TodoProps) => {
  return (
    <div className="todo" role="listitem">
      <input type="checkbox" 
        checked={completed} 
        className="custom-checkbox" 
        id={id}
        onChange={onToggle}
        >
      </input>
      <label className={`title ${completed ? 'completed' : ''}`} htmlFor={id}>{title}</label>
      <button className="remove" onClick={onRemove}>×</button>
    </div>
  );
}
