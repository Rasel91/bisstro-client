import { Helmet } from "react-helmet";
import menuImg from '../../../assets/menu/banner3.jpg';
import menuImg2 from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import PopularItem from "../../Home/PopularMenu/PopularItem";
import Cover from "../Cover/Cover";

const Menu = () => {
      return (
            <div>
                  <Helmet>
                    <title>Bistro | Menu</title>
                  </Helmet>
                  <Cover
                     img= {menuImg}
                     title='Our Menu'
                  ></Cover>
                  <PopularItem></PopularItem>
                  <Cover
                     img= {menuImg2}
                     title='Our Menu'
                  ></Cover>
                  <PopularItem></PopularItem>
                  <Cover
                     img= {pizzaImg}
                     title='Our Menu'
                  ></Cover>
                  <PopularItem></PopularItem>
                  <Cover
                     img= {saladImg}
                     title='Our Menu'
                  ></Cover>
                  <PopularItem></PopularItem>
                  <Cover
                     img= {soupImg }
                     title='Our Menu'
                  ></Cover>
                  <PopularItem></PopularItem>
            </div>
      );
};

export default Menu;