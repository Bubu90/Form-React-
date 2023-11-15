import { useState } from 'react';
import ListForm from './components/ListForm';
import TaskList from './components/globalCssCard/TaskList';
import CompletedTasks from './components/globalCssCard/CompletedTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: newTask,
        completed: false
      }
    ]);
  }

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
    
      <div className='container mt-5 '>
        

       
          <div className=''>
            <ListForm addTask={addTask} />
        </div>
        <div className=' row justify-content-between'  >

          <div className='card col-5 flip-2-ver-left-fwd'  >
            {/* TaskList mostra tutte le task */}
            <TaskList tasks={tasks} removeTask={removeTask} toggleTaskStatus={toggleTaskStatus} />
          </div>
          <div className='card col-5 '>

            {/* CompletedTasks mostra solo le task completate */}
            <CompletedTasks tasks={tasks.filter(task => task.completed)} />

          </div>

        </div>
      
    </div>
    
    </>
    
  )
}

export default App;

