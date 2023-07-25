import './Banner.css';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { BannerContext } from '../../../context/BannerContext';

function Banner() {
  const { banner, setBanner } = useContext(BannerContext);
  const [inputValues, setInputValues] = useState({
    descricao: '',
    legenda: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBanner((prevBanner) => ({
      ...prevBanner,
      descricao: inputValues.descricao || prevBanner.descricao,
      legenda: inputValues.legenda || prevBanner.legenda,
    }));
  };

  return (
    <nav className='banner-principal-wrapper'>
      <div className='legenda-wrapper'>
        <div className='descricao-wrapper'>
          <h6>{banner.descricao}</h6>
        </div>
        <h1 className="display-4"><strong>{banner.legenda}</strong><span className='point'>.</span></h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='descricao-input'>
          <label htmlFor="descricao">Atualize a descrição:</label>
          <input className='input1' type="text" name="descricao" onChange={handleInput} id="descricao" />
        </div>
        <div className='legenda-input'>
          <label htmlFor="legenda">Atualize a legenda:</label>
          <input className='input2' type="text" name="legenda" onChange={handleInput} id="legenda" />
        </div>
        <div><button type="submit">Atualizar</button></div>
      </form>
    </nav>
  );
}

Banner.propTypes = {
  descricao: PropTypes.string.isRequired,
  legenda: PropTypes.string.isRequired,
};

export default Banner;
