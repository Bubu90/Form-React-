import React from 'react';


function CompletedTasks({ tasks }) {
  return (
    <div className="completed-tasks text-white  ">
      <h2>Completed Tasks</h2>
      
        {tasks.map((task) => (
          <div className='text-white item-container ' key={task.id}>
            <span
              style={{
                textDecoration: 'line-through'
              }}
            >
              {task.content}
            </span>
          </div>
        ))}
     
    </div>
  );
}

export default CompletedTasks;