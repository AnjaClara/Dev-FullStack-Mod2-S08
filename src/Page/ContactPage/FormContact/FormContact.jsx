import { useState } from 'react';
import CardContact from '../CardContact/CardContact'
import './FormContact.css'

function FormContact() {

  const[data, setData] = useState({
    name:'',
    phone:'',
    email:'',
    message:'',
  });

  const handleInput = (e) => {
    const{value, name} = e.target;
    setData({...data, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Olá ${data.name}, seu e-mail (${data.email}) foi enviado`)
  }
  
  return(
    <>
    <div className="body" >  
        <h2><strong>Deixe o seu recado</strong></h2>
        <form className="form-content" onSubmit={handleSubmit}>
          <div className='nameTel'>
            <input type='text' className='text' name="name" onChange={handleInput} placeholder="Insira seu nome.." id="name" required></input>
            <input type='tel' className='phone' name="phone" onChange={handleInput} placeholder="Insira seu telefone..." id="phone" required></input>
          </div>
          <div className='email1'>
            <input type='email' className='email' name="email" onChange={handleInput} placeholder="Insira seu e-mail" id="email" required></input>
          </div>
          <div className='message1'>
            <input type='text' className='message' name="message" onChange={handleInput} placeholder="Insira sua mensagem..." id='message' required></input>
          </div>
          <button type="submit" className="sendButton">Enviar</button>
        </form>
    </div>
    </>
  ) 
}

export default FormContact