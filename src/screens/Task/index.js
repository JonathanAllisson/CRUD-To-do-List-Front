import React, {useState, useEffect, useRef} from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Task(props){

  const [opSelect, setOptSelect] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [alert, setAlert] = useState(false);

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

  useEffect(() => {
    console.log(props.task);
      if(props.task){
        setTitle(props.task.title);
        setDescription(props.task.description);
        setOptSelect(props.task.icon);
      }
  },[]);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  async function handleSubmit(e){
    e.preventDefault();
    if(opSelect === '' || title === '' || description === ''){
      setAlert(true);
    }
    else if(props.task){
      await api.put("task", {
        title,
        description,
        icon: opSelect,
        idTask: props.task.id
      });
      props.setModal(false);
    }
    else {
      await api.post("task", {
        title,
        description,
        icon: opSelect
      });
      props.setModal(false);
    }
  }

  return(
    <Container>
      <div className="box" ref={wrapperRef}>
        <div className="header">
          <h1>Criar Tarefa</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="icons-list">
          {icons.map(icon => (
            <label className= { opSelect === icon ? `${icon} selected` : `${icon}`}>
              <img src={require(`../../assets/${icon}.svg`)} alt={icon}/>
              <input
                className="radio"
                type="radio" 
                name="i" 
                value={icon}
                onChange={e => setOptSelect(e.target.value)}  
                />
            </label>
          ))}             
          </div>
          {
            alert ? (
              <p className="msg-alert">Preencha todos os campos</p>
            ) : (
              null
            )
          }
          <h2>Título:</h2>
          <input 
            className="title" 
            type="text" 
            placeholder="Titulo da tarefa"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <h2>Descrição:</h2>
          <textarea 
            className="description" 
            type="text" 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button>Criar</button>
        </form>
      </div>
    </Container>
  )
}