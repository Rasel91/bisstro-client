import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../../pages/Navbar/Navbar";


const Main = () => {

      const location = useLocation();
      const noHeaderFooter = location.pathname.includes('login')||location.pathname.includes('singup')
      return (
            <div>
                  {noHeaderFooter || <Navbar></Navbar>}

                  <Outlet></Outlet>

                  {noHeaderFooter || <footer></footer>}
            </div>
      );
};

export default Main;