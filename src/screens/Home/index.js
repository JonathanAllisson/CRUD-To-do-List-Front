import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import DarkModeToggle from 'react-dark-mode-toggle';

import { FaTools, FaGamepad, FaTrash } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'

import Task from '../Task';

import { Container, Screen } from './styles';

export default function Home({theme, setTheme}){

  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks(){
      const listTasks = await api.get('/task');
      setTasks(listTasks.data);
    }

    loadTasks();
  },[tasks])

  return(
    <Screen>
      <div className="button">
        <DarkModeToggle
          checked={theme}
          onChange={setTheme}
          />
      </div>
    <Container>
      <h1>Todo List</h1>
      <button onClick={setModal}>
        <span>Adicionar Task</span>
        <IoIosAdd />
      </button>
        <ul className="task-list">
          <li className="task">
            <div className="box">
                <FaTools />
            </div>
            <div className="box-content">
                <p>Ajustar horários de sono</p>
                <span>11/07/2020 - 02:53</span>
            </div>
            <div className="box-actions">
                <FaTools />
                <FaTrash />
            </div>
          </li>
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
                  <span>{task.created_at}</span>
              </div>
              <div className="box-actions">
                  <FaTools />
                  <FaTrash />
              </div>
            </li>
          ))}          
        </ul>
    </Container>
    {modal ? (
      <Task setModal={setModal} user={{name: 'Jonathan'}}/>
    ) : ( 
      null
    )}
    </Screen>
  )
}