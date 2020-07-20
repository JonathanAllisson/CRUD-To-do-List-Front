import React, { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import api from '../../services/api';
import DarkModeToggle from 'react-dark-mode-toggle';

import { FaTools, FaGamepad, FaTrash } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'

import Task from '../Task';

import { Container, Screen } from './styles';

export default function Home({theme, setTheme}){

  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskModal, setTaskModal] = useState(null);

  useEffect(() => {
    async function loadTasks(){
      const listTasks = await api.get('/task');
      setTasks(listTasks.data);
    }

    loadTasks();
  },[tasks])


  function handleUpdate(task){
    setTaskModal(task);
    setModal(true);
  }

  function handleCreate(){
    setTaskModal(null);
    setModal(true);
  }

  async function handleDelete(id){
    await api.delete(`task${id}`);
  }

  return(
    <Screen>
      <div className="button">
        <DarkModeToggle
          checked={theme}
          onChange={setTheme}
          />
      </div>
    <Container>
      <h1>To Do List</h1>
      <button 
        className="btn-submit"
        onClick={() => handleCreate()}>
        <span>Adicionar Task</span>
        <IoIosAdd />
      </button>
        <ul className="task-list">
          {tasks.map(task => (
            <li 
              key={task.id}
              className="task"  
            >
              <div className="box">
                <img src={require(`../../assets/${task.icon}.svg`)} alt={task.icon}/>
              </div>
              <div className="box-content">
                  <p>{task.title}</p>
                  <span>{dateFormat(task.created_at, "dd/mm/yyyy - HH:MM")}</span>
              </div>
              <div className="box-actions">
                <FaTools onClick={() => handleUpdate(task) }/>
                <FaTrash onClick={() => handleDelete(task.id)}/>
              </div>
            </li>
          ))}          
        </ul>
    </Container>
    {modal ? (
      <Task setModal={setModal} task={taskModal}/>
    ) : ( 
      null
    )}
    </Screen>
  )
}