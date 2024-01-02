/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
      return (
            <div className=" md:w-2/5 mx-auto text-center">
                <p className="mb-2 text-yellow-500 text-center">---{subHeading}-------</p>
                <h3 className="uppercase font-bold mb-16 border-y-4 py-2">{heading}</h3>  
            </div>
      );
};

export default SectionTitle;