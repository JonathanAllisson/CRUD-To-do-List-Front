import React, {useState} from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import { FaTools, FaGamepad, FaTrash } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'

import Task from '../Task';

import { Container, Screen } from './styles';

export default function Home({theme, setTheme}){

  const [modal, setModal] = useState(false);

  const constSetVisibile = () => {

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
          <li className="task">
            <div className="box">
                <FaGamepad />    
            </div>  
          </li>
          <li className="task">
            <div className="box">J</div>
          </li>
          <li className="task">
            <div className="box">D</div>
          </li>
        </ul>
    </Container>
    {modal ? (
      <Task setModal={setModal} />
    ) : ( 
      null
    )}
    </Screen>
  )
}