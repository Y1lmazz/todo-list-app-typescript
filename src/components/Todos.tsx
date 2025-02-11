import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoByID } from '../redux/todoSlice';

interface TodoProps{
  todo: TodoType
}

function Todos( {todo}:TodoProps ) {

  const {id, content} = todo
  const dispatch = useDispatch()

  const handleRemoveTodo = () => {
    dispatch(removeTodoByID(id))

  }

  return (
    <>
      <div className="todo-item">
        <p>{content}</p>
        <div>
          <button onClick={handleRemoveTodo} className='icons' style={{marginRight:15}}><RiDeleteBin6Line /></button>
          <button className='icons' style={{marginRight:5}}><LuPencilLine /></button>
        </div>
      </div>
    </>
  )
}

export default Todos