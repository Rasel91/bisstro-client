import Banner from "./Banner";
import ChefOption from "./ChefOption/ChefOption";
import ChefServiec from "./ChefServiec/ChefServiec";
import ContactUs from "./ContactUs/ContactUs";
import Curosel from "./Curosel/Curosel";
import PopularItem from "./PopularMenu/PopularItem";



const Home = () => {
      return (
            <div className="">
                  <Banner></Banner>
                  <Curosel></Curosel>
                  <ChefServiec></ChefServiec>
                  <PopularItem></PopularItem>
                  <ContactUs></ContactUs>
                  <ChefOption></ChefOption>

            </div>
      );
};

export default Home; 