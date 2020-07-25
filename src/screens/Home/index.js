import React, { useState, useEffect, useContext } from 'react';
import dateFormat from 'dateformat';
import api from '../../services/api';
import DarkModeToggle from 'react-dark-mode-toggle';

import { FaTools, FaTrash } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'

import { Context } from '../../Context/authContext';

import Task from '../Task';

import { Container, Screen } from './styles';

export default function Home(){

  const { theme, setTheme } = useContext(Context);

  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskModal, setTaskModal] = useState(null);

  useEffect(() => {
    async function loadTasks(){
      const listTasks = await api.get('task');
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
    try{
      await api.delete(`task${id}`);
    }catch(err){
      console.log(err);
    }
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
                  <p className="title">{task.title}</p>
                  <p className="description">{task.description}</p>
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