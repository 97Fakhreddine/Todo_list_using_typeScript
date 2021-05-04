import React, { ChangeEvent, FormEvent, useState } from "react";

/**
 * @v4 is a package that generate a unique id
 */

import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types/todo";

import { data } from "../mock-data/data";
import { AddTodo } from "./AddTodo";
import { Row } from "./Row";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);

  const [task, setTask] = useState<string>("");

  const todosLength = todos.length;

  const hasTodos = todos.length > 0;

  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  /**
   * @function handleCheckTodo
   * @param id  // type string
   * @returns {void}
   * this function  checks the todo by changing its state { isCompleted }
   */
  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  /**
   * @function handleDeleteTodo
   * @param id  // type string
   * @returns {void}
   * this function filter the todo list and delete the todos that has the giving id
   */

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  /**
   * @function handleAddTodo
   * @param {todo : Todo}   // type Todo
   * @returns {void}
   * this function add a todo and empty the input
   */

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };

  /**
   * @function handleChange
   * @param {ChangeEvent}
   * @returns {void}
   */

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  /**
   * @function handleSubmitTodo
   * @param {event : FormEvent}
   * @returns {void}
   */

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  };

  return (
    <section className='w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center'>
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />
      <div className='h-10' />
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
      {!hasTodos && (
        <p className='mb-5 text-xl text-red-500 uppercase'>
          Please add a todo!
        </p>
      )}
      {hasTodos && (
        <p>
          [{remainingTodos} of {todosLength}] todos remaining
        </p>
      )}
    </section>
  );
};
