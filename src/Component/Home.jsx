import React, { useState, useContext } from 'react';
import { Context } from '../Context/Context';
import TaskDisp from './TaskDisp';

const Home = () => {
  const { Task, setTask } = useContext(Context);
  console.log(Task);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setInput(value);
  };

  const handleAddTasks = () => {
    if (input.trim()) {
      setTask([...Task, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  console.log("input:", input);

  return (
    <div>
       <div className='max-w-[1200px] mt-[60px] mx-auto'>
      <div className='flex items-center justify-center'>
        <div className='card bg-white p-6 border rounded-lg shadow-lg w-full max-w-md'>
          <h1 className='text-2xl font-bold mb-6 text-center'>Enter Your Task</h1>
          <div className='input-container flex items-center'>
            <input
              type='text'
              className='w-full max-w-sm pl-4 pr-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 duration-150'
              placeholder='Enter something'
              value={input} // Add this line to control the input value
              onChange={handleChange}
            />
            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 duration-150'
              onClick={handleAddTasks}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
   <TaskDisp/>
    </div>
  );
};

export default Home;
