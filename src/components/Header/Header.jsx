import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {

  const renderMenuItem = (menuItem) =>{
    return(
      <li><a href={menuItem.path}>{menuItem.label}</a></li>
    )
  }

  return(
    <nav className='menu-principal-wrapper'>
      <div className='logo-wrapper'>
        <h1><strong>Food Tricks</strong></h1>
      </div>
      <ul className='menu-wrapper'>
        {props.menu.length >0
          ? props.menu.map(renderMenuItem)
          : emptyMenu()
        }
      </ul>

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