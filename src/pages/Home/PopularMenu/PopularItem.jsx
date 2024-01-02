import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularItem = () => {


      const [menu, setMenu] = useState([])

      fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                  const popularItems = data.filter(item => item.category === 'popular')
                  setMenu(popularItems)
            })

      return (
            <section className="my-10">
                  <div>
                        <SectionTitle
                              subHeading={'Check it out'}
                              heading={'FROM OUR MENU'}
                        ></SectionTitle>

                  </div>

                  <div className=" grid md:grid-cols-2">
                        {
                              menu.map(item=><MenuItem
                                    key={item._id}
                                    item={item}
                                   ></MenuItem>)
                        }

                  </div>
                  <div className="flex justify-center items-center">
                  <AwesomeButton type="primary">View Full Menu</AwesomeButton>
                  </div>
            </section>
      );
};

export default PopularItem;