
import React from 'react';
import { render, screen ,fireEvent ,act} from '@testing-library/react';
import TodoList from "../components/TodoList";
import TodoForm from '../components/TodoForm';
import App from "../App";

test('renders_App_component_without_crashing', () => {
  render(<App />);
});

test('renders_TodoList_with_no_todos', () => {
  render(<TodoList />);

  // Check if the title is rendered correctly
  const titleElement = screen.getByText('To-do Catalog');
  expect(titleElement).toBeInTheDocument();

  // Check if no todos are rendered initially
  const todoItems = screen.queryAllByRole('listitem');
  expect(todoItems).toHaveLength(0);
});

test('adds_a_new_todo', () => {
  render(<TodoList />);

  // Enter text in the input field
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });

  // Click the "Add" button
  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);

  // Check if the new todo is added
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(1);
});


test('toggles_a_todo_completion_status', () => {
  render(<TodoList />);

  // Add a new todo
  const inputElement = screen.getByRole('textbox');
  const addButton = screen.getByText('Add');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  // Toggle the completion status of the todo
  const checkboxElement = screen.getByRole('checkbox');
  fireEvent.click(checkboxElement);

  // Check if the todo's completion status is toggled
  expect(checkboxElement.checked).toBe(true);
});

test('edits_a_todo', () => {
  render(<TodoList />);

  // Add a new todo
  const inputElement = screen.getByRole('textbox');
  const addButton = screen.getByText('Add');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  // Edit the todo's text
  const todoTextElement = screen.getByDisplayValue('New Todo');
  fireEvent.change(todoTextElement, { target: { value: 'Edited Todo' } });

  // Check if the todo's text is edited
  expect(todoTextElement.value).toBe('Edited Todo');
});

test('deletes_a_todo', () => {
  render(<TodoList />);

  // Add a new todo
  const inputElement = screen.getByRole('textbox');
  const addButton = screen.getByText('Add');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  // Delete the todo
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  // Check if the todo is deleted
  const todoItems = screen.queryAllByRole('listitem');
  expect(todoItems).toHaveLength(0);
});

test('updates_input_value_using_useState', () => {
  render(<TodoForm />);

  // Find the input element
  const inputElement = screen.getByRole('textbox');

  // Simulate typing in the input
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });

  // Check if the input value is updated
  expect(inputElement.value).toBe('New Todo');
});

