/* eslint-disable react/prop-types */
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import Cover from "../../Cover/Cover";
import MenuItem from "../../MenuItem/MenuItem";


const MenuCategory = ({ items, title, img, }) => {
      return (
            <div className="my-10">
                  {title && <Cover img={img} title={title}></Cover>};
                  <div className=" grid md:grid-cols-2 ">
                        {
                              items.map(item => <MenuItem
                                    key={item._id}
                                    item={item}
                              ></MenuItem>)
                        }

                  </div>

                  <div className="flex justify-center items-center">
                       <Link to= {`/order/${title}`}><AwesomeButton type="primary">Order Our Popular Food</AwesomeButton></Link>
                       {/* <Link to= '/order'><AwesomeButton type="primary">Order Our Popular Food</AwesomeButton></Link> */}
                  </div>




            </div>
      );
};

export default MenuCategory;