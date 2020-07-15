import React, {useState, useEffect, useRef} from 'react';

import { Container } from './styles';

export default function Task(props){

  const [opSelect, seOptSelect] = useState('');

  const icons = ['ball', 'beer','bike', 'book', 'car', 'cart', 'game', 'hat', 'home', 'microphone', 'pen', 'run', 'star', 'tool'];

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                props.setModal(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return(
    <Container>
      <div className="box" ref={wrapperRef}>
        <div className="header">
          <h1>Criar Tarefa</h1>
        </div>
        <form>
          <div className="icons-list">
          {icons.map(icon => (
            <label className= { opSelect === icon ? `${icon} selected` : `${icon}`}>
              <img src={require(`../../assets/${icon}.svg`)} alt={icon}/>
              <input
                className="radio"
                type="radio" 
                name="i" 
                value={icon}
                onChange={e => seOptSelect(e.target.value)}  
                />
            </label>
          ))}             
          </div>
          <h2>Título:</h2>
          <input className="title" type="text" placeholder="Titulo da tarefa"/>
          <h2>Descrição:</h2>
          <input className="description" type="text" placeholder="Descrição" />
          <button>Criar</button>
        </form>
      </div>
    </Container>
  )
}