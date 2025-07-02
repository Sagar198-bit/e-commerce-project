// All your imports same as before...
import "../../index.css";
import { NavLink } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import mycontext from "../../context/Estore";
import { app } from "../../Firebaseauth/FirebaseAuth";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

function Navbar() {
  const { addcart } = useContext(mycontext);
  const [name, setname] = useState("");
  const [islogin, setlogin] = useState(false);
  const [ishumburgeropen, sethumburgeropen] = useState(false);

  const auth = getAuth(app);

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
      if (user) {
        setname(user.displayName);
        setlogin(true);
        console.log(name)
      } else {
        setname("");
        setlogin(false);
      }
    });
    
  }, []);

  const signuOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully Signed out!", {
          position: "top-left",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleHamburger = () => {
    sethumburgeropen((prev) => !prev);
  };

  return (
    <header className="text-gray-600 bg-white body-font drop-shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-3 justify-between items-center">
        <NavLink className="flex items-center text-gray-900" to="/">
          <span className="text-xl font-bold">Shopify</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="md:flex hidden space-x-5 items-center">
          <NavLink to="/" className="hover:text-gray-900">Home</NavLink>
          <NavLink to="/Product" className="hover:text-gray-900">Products</NavLink>
          <NavLink to="/categories" className="hover:text-gray-900">Categories</NavLink>
          <NavLink to="/contact" className="hover:text-gray-900">Contact</NavLink>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          {

          }
          {name && (
            <div className=" flex gap-2 items-center text-black font-semibold space-x-2">
              <IoMdPerson />
              {name}
            </div>
          )}

          {islogin ? (
            <button
              onClick={signuOut}
              className="hidden md:flex items-center bg-gray-100 hover:bg-gray-200 py-1 px-3 rounded"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="/Login"
              className="hidden md:flex items-center bg-gray-100 hover:bg-gray-200 py-1 px-3 rounded"
            >
              Login
            </NavLink>
          )}

          <NavLink to="/Cart">
            <IconButton>
              <ShoppingCartIcon fontSize="small" />
              <CartBadge badgeContent={addcart.length} color="primary" />
            </IconButton>
          </NavLink>

          {/* Hamburger */}
          <button
            onClick={toggleHamburger}
            className="md:hidden inline-flex items-center"
          >
            {ishumburgeropen ? <RxCross1 size={22} /> : <GiHamburgerMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {ishumburgeropen && (
        <div className="bg-indigo-500 absolute w-full h-screen z-40 md:hidden transition">
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-semibold text-black">
            <NavLink to="/" onClick={toggleHamburger}>Home</NavLink>
            <NavLink to="/Product" onClick={toggleHamburger}>Products</NavLink>
            <NavLink to="/categories" onClick={toggleHamburger}>Categories</NavLink>
            {islogin ? (
              <button onClick={() => { signuOut(); toggleHamburger(); }}>
                Log Out
              </button>
            ) : (
              <NavLink to="/Login" onClick={toggleHamburger}>Login</NavLink>
            )}
            <NavLink to="/Cart" onClick={toggleHamburger}>
              Cart ({addcart.length})
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
