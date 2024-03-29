import { useEffect, useState } from "react";


const useMenu = () => {
      const [menu, setMenu] = useState([])
      const [loader, setLoader] = useState(true)
      useEffect(() => {
            fetch('http://localhost:5000/menu')
                  .then(res => res.json())
                  .then(data => {
                        // const popularItems = data.filter(item => item.category === 'popular')
                        // setMenu(popularItems)
                        setMenu(data);
                        setLoader(false)
                  })

      }, [menu, loader])
      return [menu]


};

export default useMenu;