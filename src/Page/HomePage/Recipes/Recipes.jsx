import './Recipes.css'
import PropTypes from 'prop-types';
import Busca from './Busca';

function Recipes(props) {
  
  const ingredientsItem = (ingredientItem) =>{
    return(
        <>
        <br></br>
        <img className='image-product' ></img>
        <li><h2>{ingredientItem.title}</h2></li>
        <li>{ingredientItem.price}</li>
        <li>{ingredientItem.text}</li>
        <button className='buy-button'>Compre</button>
        </>     
    )
  }

  return(
    <div className='content-fluid'>    
      <div className='line col-sm-6 col-md-4 col-lg-3 mb-5'>
      <Busca/>
        <ul className='recipes-wrappers list-group'>
          {props.recipes.length >0
            ? props.recipes.map(ingredientsItem)
            : emptyMenu()
          }
        </ul>
      </div>

    </div>
  )

}


Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    text: PropTypes.string,
  }))
}


export default Recipes