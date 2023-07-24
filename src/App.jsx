import './App.css'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes';

function App() {
  const menu = [
    {
      id: 1,
      label: 'Receitas',
      path: '#',
    },
    {
      id: 2,
      label: 'Contatos',
      path: '#',
    }
  ];

  const recipes = [
    {
      id: 1,
      title: 'Bolo de Cenoura',
      price: 'R$ 2.50',
      text: 'Compre e desbloqueie a melhor receita de bolo do mundo',
    },
    {
      id: 2,
      title: 'Bolo de Chocolate',
      price: 'R$ 1.50',
      text: 'Compre e desbloqueie a melhor receita de bolo do mundo',
    },
    {
      id: 3,
      title: 'Bolo de Churros',
      price: 'R$ 4.50',
      text: 'Compre e desbloqueie a melhor receita de bolo do mundo',
    }

  ] 

  return (
    <>
      <Header  menu={menu}/>
      <Banner descricao='ESCOLHA A MELHOR PARA VOCÊ' legenda='nossas receitas'/>
      <Recipes recipes={recipes}/>
      <Footer/>
    </>
  )
}

export default App
