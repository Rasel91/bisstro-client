import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Link } from "react-router-dom";

const Navbar = () => {
      const navlist = <>
     
            <li><Link to= '/'><AwesomeButton type="primary">Home</AwesomeButton></Link></li>
            <li><Link to= '/menu'><AwesomeButton type="primary">Menu</AwesomeButton></Link></li>
            <li><Link to= '/order/salad'><AwesomeButton type="primary">OrderFood</AwesomeButton></Link></li>
            
      </>

      return (
            <div>
                  <div className="navbar fixed z-10 opacity-75 bg-black text-white max-w-screen-lg ">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                         
                                          {navlist}
                                    </ul>
                              </div>
                              <p className="btn btn-ghost text-xl uppercase font-bold">Bisto Boss</p>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                {navlist}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <Link to='/login' className="btn">Login</Link>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;