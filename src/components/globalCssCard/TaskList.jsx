import React from 'react';

function TaskList({ tasks, removeTask, toggleTaskStatus }) {
  return (
    <div className="task-list text-white   ">
      <h2>Task List</h2>
      
        {tasks.map((task) => (
          
          <div className='item-container' >
            <div>

            <p  className='' key={task.id}></p>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {task.content}
            </span>
            </div>
        <div>

            <button className=' button1 bg-transparent' onClick={() => removeTask(task.id)}><i class="fa-solid fa-ban"></i></button>
            <button className=' bg-transparent button2' onClick={() => toggleTaskStatus(task.id)}>
              {task.completed ? <i className=''  class="fa-solid fa-arrow-rotate-left"></i> : <i class="fa-solid fa-check"></i>}
            </button>
        </div>

        
          </div>
        ))}
      
    </div>
  );
}

export default TaskList;