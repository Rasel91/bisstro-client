import { Helmet } from "react-helmet";
import Banner from "./Banner";
import ChefOption from "./ChefOption/ChefOption";
import ChefServiec from "./ChefServiec/ChefServiec";
import ContactUs from "./ContactUs/ContactUs";
import Curosel from "./Curosel/Curosel";
import Featured from "./Featured/Featured";
import PopularItem from "./PopularMenu/PopularItem";



const Home = () => {
      return (
            <div >
                    <Helmet>
                    <title>Bistro | Home</title>
                  </Helmet>
                  <Banner></Banner>
                  <Curosel></Curosel>
                  <ChefServiec></ChefServiec>
                  <PopularItem></PopularItem>
                  <ContactUs></ContactUs>
                  <ChefOption></ChefOption>
                  <Featured></Featured>

            </div>
      );
};

export default Home; 