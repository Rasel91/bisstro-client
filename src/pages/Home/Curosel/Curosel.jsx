
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Curosel = () => {
      return (
            <section>
                  <SectionTitle

                        subHeading={"From 11.am to 10.00pm"}
                        heading={"Order Online"}
                  >

                  </SectionTitle>


                  <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                              clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-20"
                  >
                        <SwiperSlide>
                              <img src={img1} alt="" />
                              <h1 className='font-thin text-4xl uppercase text-center -mt-12 text-white'>Salad</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={img2} alt="" />
                              <h1 className='text-4xl font-thin uppercase text-center -mt-12 text-white'>Pizzas</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={img3} alt="" />
                              <h1 className='text-4xl font-thin uppercase text-center -mt-12 text-white'>Soups</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={img4} alt="" />
                              <h1 className='text-4xl font-thin uppercase text-center -mt-12 text-white'>Cake</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={img5} alt="" />
                              <h1 className='text-4xl font-thin uppercase text-center -mt-12 text-white'>desserts</h1>
                        </SwiperSlide>


                  </Swiper>
            </section>
      );
};

export default Curosel;