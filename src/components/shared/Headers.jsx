import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


export default function Navbar() {
  const {user,logOut} = useContext(AuthContext)

  return (
    <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-red-700">All Recipe</a>
            </li>
            <li>
              <a className="text-red-700">About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>

        <a className=" text-yellow-200 text-2xl">Fresh Food</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
   
          <li>
            <Link to={"/about"}>Add Recipe</Link>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
       
      </div>
      <div className="navbar-end">
          {
            user ? (
              <>
                {/* <Link
                  // to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                   Dashboard
                </Link> */}
                <div
                  onClick={()=>{
               
                    logOut()
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Register
                </Link>
              </>
            )
            }
      </div>
    </div>
  );
}
