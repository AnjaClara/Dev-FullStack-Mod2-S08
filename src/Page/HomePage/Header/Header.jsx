import './Header.css';
import PropTypes from 'prop-types';
import MenuComponent from '../../../components/MenuComponent';

const Header = (props) => {

  return(
    <nav className='menu-principal-wrapper'>
      <div className='logo-wrapper'>
        <h1><strong>Food Tricks</strong></h1>
      </div>
      <MenuComponent/>

    </nav>
  )
}

Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string,
    logo: PropTypes.string
  }))
}

export default Header;