import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { AwesomeButton } from "react-awesome-button";
import image1 from '../../../assets/home/slide5.jpg';

const ChefOption = () => {
      return (
            <section className="my-10">
                  <SectionTitle
                        subHeading={'Should Try'}
                        heading={'CHEF RECOMMENDS'}

                  ></SectionTitle>
                  <div className="flex gap-4">
                        <div className=" bg-base-100 shadow-xl">
                              <figure><img className="w-96 h-72 bg-cover"  src={image1} alt="#" /></figure>
                              <div className="card-body">
                                
                                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                    <div className="card-actions justify-center">
                                          
                                                <AwesomeButton className="uppercase" type="primary">add to cart</AwesomeButton>
                                        
                                    </div>
                              </div>
                        </div>
                        <div className=" bg-base-100 shadow-xl">
                              <figure><img className="w-96 h-72 bg-cover"  src={image1} alt="#" /></figure>
                              <div className="card-body">
                                
                                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                    <div className="card-actions justify-center uppercase">
                                          
                                                <AwesomeButton className="uppercase" type="primary">add to cart</AwesomeButton>
                                        
                                    </div>
                              </div>
                        </div>
                        <div className=" bg-base-100 shadow-xl">
                              <figure><img className="w-96 h-72 bg-cover"  src={image1} alt="#" /></figure>
                              <div className="card-body">
                                
                                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                    <div className="card-actions justify-center">
                                          
                                                <AwesomeButton className="uppercase" type="primary">add to cart</AwesomeButton>
                                        
                                    </div>
                              </div>
                        </div>
                        
                  </div>
            </section>
      );
};

export default ChefOption;