import './Banner.css';
import PropTypes from 'prop-types';

function Banner(props) {


  return(
    <nav className='banner-principal-wrapper'>
      <div className='legenda-wrapper'>
        <div className='descricao-wrapper'>
          <h6>{props.descricao}</h6>
        </div>
        <h1 className="display-4"><strong>{props.legenda}</strong><span className='point'>.</span></h1>
      </div>
    </nav>
  );
}

Banner.propTypes = {
  descricao: PropTypes.string.isRequired,
  legenda: PropTypes.string.isRequired,

}

export default Banner;