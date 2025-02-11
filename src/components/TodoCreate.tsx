import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';



function TodoCreate() {

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('')

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleCreateTodo();
            console.log("123123")
        }
    };    

    const handleCreateTodo = () => {
        if(newTodo.trim().length == 0) {
            alert("Yapılacak bir iş giriniz!")
            return
        }

        const payload : TodoType = {
            id : Math.floor(Math.random()*99999999),
            content : newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo('');
    }

   

  return (
    <>
        <div className="create-div">
            <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown} className='todo-input' type="text" placeholder='Yapılacak iş giriniz...' />
            <button onClick={handleCreateTodo}  className='add-btn'>EKLE</button>
        </div>
    </>
  )
}

export default TodoCreate