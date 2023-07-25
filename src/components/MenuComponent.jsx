import { Link } from "react-router-dom";
import './MenuComponent.css'

const MenuComponent = () => {
  return(
    <ul className="menu-wrapper">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contact'}>Contatos</Link></li>
      <li><Link to={'/product'}>Receitas</Link></li>
      <li><Link to={'*'}></Link></li>
    </ul>
  );
} 

export default MenuComponent