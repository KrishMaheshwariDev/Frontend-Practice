
// Text = #f8ebf9
// Background = #130614
// primary = #d896e1
// secondary = #896427
// accent = #a7c944

// GOAL - TODO list app with react and tailwindcss

import { useState } from "react";

function TODO() {
  const [task, setTask] = useState("");
  const [taskTable, setTaskTable] = useState([]);

  // Add new task
  function addTask() {
    if (task.trim() !== "") {
      setTaskTable([
        ...taskTable,
        { id: taskTable.length + 1, task: task, completed: false },
      ]);
      setTask(""); // clear input
    }
  }

  // Mark task as complete
  function completeTask(id) {
    setTaskTable(
      taskTable.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Delete task
  function deleteTask(id) {
    setTaskTable(taskTable.filter((t) => t.id !== id));
  }

  return (
    <div className="bg-[#d896e1] text-[#f8ebf9] w-[410px] flex flex-col items-center justify-center p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>

      {/* Input + Add button */}
      <div className="flex gap-2 mb-4 mt-2">
        <input
          type="text"
          placeholder="Enter a task"
          className="bg-[#896427] text-[#f8ebf9] p-1.5 rounded-lg font-medium transition-colors"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-[#a7c944] hover:bg-[#896427] text-[#f8ebf9] p-1.5 rounded-lg font-medium transition-colors"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="flex flex-col gap-2 w-full">
        {taskTable.map((item) => (
          <div
            key={item.id}
            className="bg-[#896427] text-[#f8ebf9] flex flex-row items-center justify-between p-2 rounded-lg"
          >
            <p
              className={`text-lg font-medium ${
                item.completed ? "line-through" : ""
              }`}
            >
              {item.task}
            </p>
            <div className="flex gap-2">
              <button
                className="bg-[#a7c944] hover:bg-[#896427] text-[#f8ebf9] px-2 rounded-lg font-medium transition-colors"
                onClick={() => completeTask(item.id)}
              >
                {item.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white px-2 rounded-lg font-medium transition-colors"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TODO;