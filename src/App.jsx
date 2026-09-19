import { useEffect, useState } from "react";

import Heading from './components/header/heading.jsx';
import Index from './components/todoForm/index.jsx';
import TaskList from './components/todoList/TasksList.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import { computeHours } from './utils/taskTime.js';




const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState('tasks');

  function getTasks() {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }

  useEffect(() => {
    getTasks();
  }, [])

  function setSavedTasks(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(newTitle, newDescription, newStartDate, newEndDate) {
    setSavedTasks([...tasks, {
      id: crypto.randomUUID(),
      title: newTitle,
      description: newDescription,
      startDate: newStartDate,
      endDate: newEndDate,
      hours: computeHours(newStartDate, newEndDate),
      isCompleted: false
    }]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setSavedTasks(newTasks);
  }

  function CompleteTasksById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasks(newTasks);
  }
  return (
    <>
      <Heading tasks={tasks} />

      <nav className="viewTabs">
        <button
          className={`viewTab ${view === 'tasks' ? 'viewTabActive' : ''}`}
          onClick={() => setView('tasks')}>
          Tasks
        </button>
        <button
          className={`viewTab ${view === 'dashboard' ? 'viewTabActive' : ''}`}
          onClick={() => setView('dashboard')}>
          Dashboard
        </button>
      </nav>

      {view === 'tasks' ? (
        <>
          <Index handleAddTask={addTask} />

          <TaskList tasks={tasks}
            onDelete={deleteTaskById}
            onComplete={CompleteTasksById} />
        </>
      ) : (
        <Dashboard tasks={tasks} />
      )}
    </>
  )
}

export default App
