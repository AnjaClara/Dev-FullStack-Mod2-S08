import { useContext } from "react";
import { BannerContext, BannerProvider } from "../../context/BannerContext";
import Faq from "../FAQ/Faq";
import Banner from "../HomePage/Banner/Banner";
import Footer from "../HomePage/Footer/Footer";
import Header from "../HomePage/Header/Header";
import Recipes from "../HomePage/Recipes/Recipes";

const Produtos = () => {

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

  return(
    <div>
      <Header/>
      <BannerProvider>
        <Banner/>
      </BannerProvider>
      <Recipes recipes={recipes}/>
      <Faq/>
      <Footer/>
    </div>
  );
} 

export default Produtos