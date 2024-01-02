import { AwesomeButton } from 'react-awesome-button';
import imag1 from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';

const Featured = () => {
      return (
            <section className='feature-image bg-cover blur-0  '>
                  <div className='text-white py-7 '>
                        <SectionTitle
                              subHeading={'Check it out'}
                              heading={'FROM OUR MENU'}
                        ></SectionTitle>
                        <div className='flex items-center p-10 '>
                              <div className='w-1/2'>
                                    <img className='max-w-96 bg-cover' src={imag1} alt="" srcSet="" />
                              </div>
                              <div className='w-1/2 space-y-3'>
                                    <p>March 20, 2023</p>
                                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                    <AwesomeButton className="uppercase" type="primary">Read More</AwesomeButton>
                              </div>
                        </div>
                  </div>
                  <div className='absolute bg-black'>
                        
                  </div>
            </section>
      );
};

export default Featured;