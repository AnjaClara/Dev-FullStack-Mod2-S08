import Map from '../Map'
import './CardContact.css'


function CardContact() {
  return(
    <>
    <Map/> 
    <div className='top'>
    <h1><strong>Matriz</strong></h1>
    </div>
    <div className="body-map">   
      <div className="local">
        <ul>
          <li>Rua Afonso Pena, 1568, Centro</li>
          <li>Belo Horizonte, Minas Gerais</li>
        </ul>
      </div>
      <div className="local contato">
        <ul>
          <li>contato@foodtricks.com.br</li>
          <li>+55 31 9 9430-3303</li>
        </ul>
      </div>  
    </div>
    <div className='bottom'>
    <h6>Aberta de 08h00 as 18h00 de segunda a sexta</h6>
    </div>
    </>
    
  )
}

export default CardContact