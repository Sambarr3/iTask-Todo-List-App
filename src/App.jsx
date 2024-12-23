import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { VscDiffAdded } from "react-icons/vsc";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(""); // Input field value
  const [todos, setTodos] = useState([]); // List of all todos
  const [showFinished, setShowFinished] = useState(true); // Toggle for showing completed tasks

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever `todos` state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Saving to localStorage:", todos);
  }, [todos]);

  // Add a new todo
  const handleAdd = () => {
    if (todo.trim().length < 3) return;
    setTodos([
      ...todos,
      { id: uuidv4(), todo: todo.trim(), isCompleted: false },
    ]);
    setTodo(""); // Clear input field
  };

  // Toggle completion status of a todo
  const handleCheckbox = (e) => {
    const id = e.target.name;
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  // Edit a todo
  const handleEdit = (id) => {
    const selectedTodo = todos.find((item) => item.id === id);
    if (selectedTodo) {
      setTodo(selectedTodo.todo);
      handleDelete(id); // Remove the old todo to avoid duplicates
    }
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Toggle visibility of completed todos
  const toggleFinished = () => {
    setShowFinished((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="md:container mx-auto my-4 p-5 bg-violet-100 rounded-xl min-h-full max-w-4xl cont">
        <h1 className="font-bold text-center text-xl">
          iTask - Manage Your Todos At One Place
        </h1>

        {/* Add a Task Section */}
        <div className="addtodo mb-6">
          <h1 className="text-lg font-bold mb-2">Add a Task</h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              className="border border-gray-300 rounded px-2 py-1 mr-2 w-5/6 justify-between input-box"
              placeholder="Enter your task"
            />
            <button
              onClick={handleAdd}
              disabled={todo.trim().length < 3}
              className="bg-blue-500 text-white px-4 py-2 rounded h-12 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <VscDiffAdded />
            </button>
          </div>
        </div>

        {/* Toggle Show Finished */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="show-finished"
            onChange={toggleFinished}
            checked={showFinished}
            className="checkbox-minimal mr-2"
          />
          <label htmlFor="show-finished" className="checkbox-label">
            Show Finished
          </label>
        </div>

        {/* Todos List */}
        <h1 className="text-lg font-semibold mb-4">Your Todos</h1>
        <div className="todos space-y-4">
          {todos.length === 0 && <div className="m-5">No Todos To Display</div>}
          {todos
            .filter((item) => (showFinished ? true : !item.isCompleted))
            .map((item) => (
              <div
                key={item.id}
                className="todo flex justify-between items-center p-4 bg-white shadow rounded md:w-full"
              >
                <div className="flex gap-5 items-center">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    id={item.id}
                    className="checkbox-custom"
                  />
                  <label
                    htmlFor={item.id}
                    className={item.isCompleted ? "line-through" : ""}
                  >
                    {item.todo}
                  </label>
                </div>
                <div className="buttons space-x-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
                  >
                    <CiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
