import { useContext } from "react";
import { BannerContext, BannerProvider } from "../../context/BannerContext";
import Faq from "../FAQ/Faq";
import Banner from "../HomePage/Banner/Banner";
import Footer from "../HomePage/Footer/Footer";
import Header from "../HomePage/Header/Header";
import CardContact from "./CardContact/CardContact";
import FormContact from "./FormContact/FormContact";

const ContactPage = () => {

  return(
    <div>
      <Header/>
      <BannerProvider>
        <Banner/>
      </BannerProvider>
      <FormContact/>
      <CardContact/>
      <Faq/>
      <Footer/>
    </div>
  );
} 

export default ContactPage