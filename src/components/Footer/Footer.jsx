import './Footer.css'

function Footer(){

  return(
    <nav className='footer-nav'>
      <div className='footer'>
        <h1><strong>Food Tricks</strong></h1>
      </div>
      <footer className="footer">
        <div className="company-info">
          <h3><strong>CONTATO</strong></h3>
          <p><strong>Endereço:</strong> Rua da Empresa, 1234 - Cidade - Estado</p>
          <p><strong>Email:</strong> contato@yourcompany.com</p>
          <p><strong>Telefone:</strong> (11) 1234-5678</p>
        </div>
    </footer>
    <p>Food Tricks &copy;Copyright</p>
    </nav>
  )
}

export default Footer