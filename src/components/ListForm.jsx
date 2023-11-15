import { useState } from 'react';

function ListForm({ addTask }) {
  const [task, setTask] = useState('');

  const formSubmitted = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  }

  const getContentTask = (event) => {
    setTask(event.currentTarget.value);
  }

  return (
    <form onSubmit={formSubmitted} className='d-flex container mb-5 justify-content-center subscribe-form'>
    
    <div >
      <input  onChange={getContentTask} className='input' type="text" id="newTask" value={task} />
      <button className=' button3' type="submit"><i class="fa-solid fa-plus input"></i></button>

    </div>
    
    </form>
    
  )
}

export default ListForm;



