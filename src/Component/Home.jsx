import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../Context/Context';

const Home = () => {
  const{Task,setTask}=useContext(Context)
  console.log(Task)
  const [input,setinput]=useState('')
  const handleChange=(e)=>{
    const value=e.target.value
    console.log(value)
    setinput(value)


  }
  const handleAddTasks=()=>{
    if(input.trim())
    {
      setTask([...Task,{id:Date.now(),text:input}])
    }
  }
  console.log("input:",input)
   
    return (
    <div className='max-w-[1200px] mt-[60px] mx-auto'>
      <div className='flex items-center justify-center'>
        <div className='card bg-white p-6 border rounded-lg shadow-lg w-full max-w-md'>
          <h1 className='text-2xl font-bold mb-6 text-center'>Enter Your Task</h1>
          <div className='input-container flex items-center'>
            <input
              type='text'
              className='w-full max-w-sm pl-4 pr-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 duration-150'
              placeholder='Enter something'
              onChange={handleChange}
            />
            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 duration-150'
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
