import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoverImage from '../../assets/shop/banner2.jpg';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../Food/FoodCard';
import Cover from "../Shared/Cover/Cover";
const OrderFood = () => {
      const [tabIndex, setTabIndex] = useState(0);
      const [menu] = useMenu();
      const offered = menu.filter(item => item.category === 'offered')
      const dessert = menu.filter(item => item.category === 'dessert')
      const pizza = menu.filter(item => item.category === 'pizza')
      const salad = menu.filter(item => item.category === 'salad')
      const soup = menu.filter(item => item.category === 'soup')
      return (
            <div>
                  <Cover img={CoverImage} title='Order Food'></Cover>

                  <div >
                        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                              <TabList>
                                    <Tab>Pizza</Tab>
                                    <Tab>Salad</Tab>
                                    <Tab>Soup</Tab>
                                    <Tab>Dessert</Tab>
                                    <Tab>Drinks</Tab>
                              </TabList>
                              <TabPanel>
                                    <div className='grid gap-4 grid-cols-3 ' >
                                          {
                                                pizza.map(item=><FoodCard
                                                key={item._id}
                                                item={item}
                                                
                                                ></FoodCard>)
                                          }
                                    </div>
                              </TabPanel>
                              <TabPanel>
                              <div className='grid gap-4 grid-cols-3 ' >
                                          {
                                                salad.map(item=><FoodCard
                                                key={item._id}
                                                item={item}
                                                
                                                ></FoodCard>)
                                          }
                                    </div>
                              </TabPanel>
                              <TabPanel>
                              <div className='grid gap-4 grid-cols-3 ' >
                                          {
                                                soup.map(item=><FoodCard
                                                key={item._id}
                                                item={item}
                                                
                                                ></FoodCard>)
                                          }
                                    </div>
                              </TabPanel>
                              <TabPanel>
                              <div className='grid gap-4 grid-cols-3 ' >
                                          {
                                                dessert.map(item=><FoodCard
                                                key={item._id}
                                                item={item}
                                                
                                                ></FoodCard>)
                                          }
                                    </div>
                              </TabPanel>
                              <TabPanel>
                              <div className='grid gap-4 grid-cols-3 ' >
                                          {
                                                offered.map(item=><FoodCard
                                                key={item._id}
                                                item={item}
                                                
                                                ></FoodCard>)
                                          }
                                    </div>
                              </TabPanel>
                        </Tabs>
                  </div>
            </div>

      );
};

export default OrderFood;