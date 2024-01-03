import { Helmet } from "react-helmet";
import menuImg from '../../../assets/menu/banner3.jpg';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../Cover/Cover";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
      const [menu] = useMenu();
      const offered = menu.filter(item => item.category === 'offered')
      const dessert = menu.filter(item => item.category === 'dessert')
      const pizza = menu.filter(item => item.category === 'pizza')
      const salad = menu.filter(item => item.category === 'salad')
      const soup = menu.filter(item => item.category === 'soup')


      return (
            <div>
                  <Helmet>
                        <title>Bistro | Menu</title>
                  </Helmet>
                  <Cover
                        img={menuImg}
                        title='Our Menu'
                  ></Cover>
                  <SectionTitle
                        subHeading="Don't miss"
                        heading="TODAY'S OFFER"
                  ></SectionTitle>
                  <MenuCategory
                        items={offered}
                  ></MenuCategory>
            
                  <MenuCategory
                        items={dessert}
                        img={desertImg}
                        title='Dessert'
                  ></MenuCategory>
                  
                  <Cover
                        img={saladImg}
                        title='Salad'
                  ></Cover>
                  <MenuCategory
                        items={salad}
                  ></MenuCategory>
                  <Cover
                        img={soupImg}
                        title='Soup'
                  ></Cover>

                  <MenuCategory
                        items={soup}
                  ></MenuCategory>

                  <Cover
                        img={pizzImg}
                        title='Pizza'
                  ></Cover>
                  <MenuCategory
                        items={pizza}
                  ></MenuCategory>
                  
            </div>
      );
};

export default Menu;