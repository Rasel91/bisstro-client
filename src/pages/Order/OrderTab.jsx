/* eslint-disable react/prop-types */
import FoodCard from "../Food/FoodCard";


const OrderTab = ({items}) => {
      return (
            <div className='grid gap-4 grid-cols-3 ' >
                  {
                       items.map(item => <FoodCard
                              key={item._id}
                              item={item}

                        ></FoodCard>)
                  }
            </div>
      );
};

export default OrderTab;