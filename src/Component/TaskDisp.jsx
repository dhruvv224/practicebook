import React, { useContext } from 'react';
import { Context } from '../Context/Context';
// import { MdDelete } from "react-icons/md";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";

const TaskDisp = () => {
    const { Task,setTask } = useContext(Context);
const handleRemoveTask=(id)=>{
    setTask(Task.filter(Task=>Task.id!==id))

}
const handleEditTask=(id,task)=>{
    

}
    return (
        <div className='container mx-auto mt-8'>
            <div className='task-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {Task?.map((item, index) => (
                    <div key={index} className='shadow-lg border bg-white rounded-lg p-5 m-2 hover:shadow-xl transition-shadow duration-300  flex justify-between'>
                        <p className='text-lg font-semibold text-gray-800'>{item.text}</p>
                        <button className='text-[25px] text-blue-500'onClick={()=>handleEditTask(item.id,item.text)}><MdEdit/></button>
                        <button type='button' className='text-[25px] hover:text-red-700 duration-150' onClick={()=>handleRemoveTask(item.id)}><MdDelete/></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskDisp;
