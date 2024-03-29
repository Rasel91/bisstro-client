/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
      return (

            <Parallax
                  blur={{ min: -55, max: 50 }}
                  bgImage={img} //require('path/to/another/image.jpg')
                  bgImageAlt="the dog"
                  strength={-200}
            >
                  <div>
                  {/* style={{ backgroundImage: `url("${img}")` }} */}
                        <div className="hero h-[600px]" >
                              <div className="hero-overlay bg-opacity-60"></div>
                              <div className="hero-content text-center bg-black opacity-70 px-40  text-neutral-content">
                                    <div className="max-w-md">
                                          <h1 className="mb-5 text-3xl font-serif font-bold uppercase">==={title}==</h1>
                                          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                    </div>
                              </div>
                        </div>
                  </div>
            </Parallax>

      );
};

export default Cover;