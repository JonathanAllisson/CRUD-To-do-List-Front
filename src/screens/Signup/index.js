import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import { Context } from '../../Context/authContext';

import { Container } from './styles';

function Signup({ history }) {
  
  const { signup } = useContext(Context);

  async function handleSubmit(values){
    try{
      const res = await signup(values);
      history.push('signin');
    }catch(err){
      console.log(err);
    }
  }

  const validations = yup.object().shape({
    name: yup.string().required("Por favor, digite seu nome"),
    email: yup.string().email("Digite um email válido").required("Por favor digite seu email"),
    password: yup.string().min(4).required("Por favor, digite sua senha")
  })

  return (
      <Container>
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <Form>
              <h1>Cadastro</h1>
              <Field 
                name="name"
                placeholder="Nome"
              />
              <ErrorMessage 
                component="span"
                name="name"
                className="Login-Error"
              />
              <Field 
                name="email"
                placeholder="Seu email"
              />
              <ErrorMessage 
                component="span"
                name="email"
                className="Login-Error"
              />
              <Field 
                name="password"
                type="password"
                placeholder="Digite sua senha"
              />
              <ErrorMessage 
                component="span"
                name="password"
                className="Login-Error"
              />
              <button type="submit">Registrar</button>
              <Link to="/signin">Já tenho conta, logar</Link>
            </Form>
          </Formik> 
      </Container>
  )
}

export default Signup;