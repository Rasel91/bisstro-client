import { useState } from "react";
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
            <section>
                  <div>
                        <SectionTitle
                              subHeading={'Check it out'}
                              heading={'FROM OUR MENU'}
                        ></SectionTitle>

                  </div>

                  <div className="border grid md:grid-cols-2">
                        {
                              menu.map(item=><MenuItem
                                    key={item._id}
                                    item={item}
                                   ></MenuItem>)
                        }

                  </div>
            </section>
      );
};

export default PopularItem;