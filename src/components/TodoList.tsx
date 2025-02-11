import React from 'react'
import Todos from './Todos'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

function TodoList() {

  const {todos} = useSelector((state:RootState)=> state.todo)

  return (
    <div className='todo-list'>
      {todos && todos.map((todo: TodoType)=>(
        <Todos key={todo.id} todo = {todo}/>
      ))}
    </div>
  )
}

export default TodoList