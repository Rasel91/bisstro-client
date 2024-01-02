import Banner from "./Banner";
import ChefServiec from "./ChefServiec/ChefServiec";
import Curosel from "./Curosel/Curosel";
import PopularItem from "./PopularMenu/PopularItem";



const Home = () => {
      return (
            <div className="">
                  <Banner></Banner>
                  <Curosel></Curosel>
                  <ChefServiec></ChefServiec>
                  <PopularItem></PopularItem>

            </div>
      );
};

export default Home; 