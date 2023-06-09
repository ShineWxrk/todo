import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the input field', () => {
    const inputElement = screen.getByPlaceholderText('Todo name');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the list of todos', () => {
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements.length).toBe(5);
  });

  it('adds a new todo', () => {
    const inputElement = screen.getByPlaceholderText('Todo name');

    fireEvent.change(inputElement, { target: { value: 'New todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', keyCode: 13 });

    expect(screen.getByText('New todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    const checkbox = screen.getByLabelText('Тестовое задание');
    
    fireEvent.click(checkbox);
    
    expect(checkbox.checked).toBe(false);
  });

  it('should remove item when remove button is clicked', () => {
    const handleRemove = jest.fn();
    const Todos = screen.getAllByRole('listitem')[0];
    const button = Todos.querySelector('.remove');
    button.addEventListener('click', handleRemove);
    button.click();

    expect(handleRemove).toHaveBeenCalledTimes(1);
  });

  it('filters the todos', () => {
    const allButton = screen.getByText('All');
    const activeButton = screen.getByText('Active');
    const completedButton = screen.getByText('Completed');
    const todos = screen.getAllByRole('listitem');
    
    expect(todos).toHaveLength(5);
    
    // Show only completed todos
    fireEvent.click(completedButton);
    const completedTodos = screen.getAllByRole('listitem');
    expect(completedTodos).toHaveLength(4);
    expect(completedTodos[0]).toHaveTextContent('Тестовое задание');
    
    // Show only active todos
    fireEvent.click(activeButton);
    const activeTodos = screen.getAllByRole('listitem');
    expect(activeTodos).toHaveLength(1);
    expect(activeTodos[0]).toHaveTextContent('Попасть на стажировку');
    
    // Show all todos
    fireEvent.click(allButton);
    const allTodos = screen.getAllByRole('listitem');
    expect(allTodos).toHaveLength(5);

  });

  it('clears completed todos', () => {
    const clearButton = screen.getByText('Clear completed');

    fireEvent.click(clearButton);

    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements.length).toBe(1);
  });
});
