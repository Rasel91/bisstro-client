/* eslint-disable react/prop-types */


const MenuItem = ({item}) => {

      const {image, price, recipe,name}= item;
      return (
            <div className="flex space-y-2 p-4">
                  <img style={{borderRadius:'0 200px 200px 200px'}} className="w-24 p-4 rounded-br-lg" src={image} alt="" />
                  <div>
                        <p className="uppercase">{name}-------------</p>
                        <p>{recipe}</p>
                  </div>
                  <p className="text-yellow-400">${price}</p>
            </div>
      );
};

export default MenuItem;