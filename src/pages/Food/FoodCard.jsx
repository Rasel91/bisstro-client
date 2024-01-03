/* eslint-disable react/prop-types */


const FoodCard = ({ item }) => {

      const { image, price, name, recipe } = item;

      return (
            <div className="">
                  <div className="card  bg-base-100 shadow-xl border">
                        {/* <figure className="px-10 pt-10">
                              <img src={image} alt="#" className="" />
                        </figure> */}
                        <figure><img src={image} alt="Shoes" /></figure>
                        <p className="absolute bg-slate-900 text-white p-3 right-0 mr-4 mt-4 ">${price}</p>
                        <div className="card-body items-center text-center">
                              <h2 className="card-title">{name}</h2>
                              <p>{recipe}</p>
                              <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;