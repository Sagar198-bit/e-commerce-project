import { useState } from "react";
import { app } from "../../Firebaseauth/FirebaseAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function Login() {
  const [login_details, setlogin_details] = useState({
    useremail: "",
    userpassword: "",
  });

  const auth = getAuth(app);
  const handlechange = (e) => {
    setlogin_details({ ...login_details, [e.target.name]: e.target.value });
    console.log(login_details);
  };

  const handlelogin = () => {
    if (login_details.useremail === "" || login_details.userpassword === "") {
      const Filedchecked = () => {
        toast.error("All Field Requied !", {
          position: "top-left",
        });
      };
      Filedchecked();
    } else {
      signInWithEmailAndPassword(
        auth,
        login_details.useremail,
        login_details.userpassword
      )
        .then((userCredential) => {
          const showToastMessage = () => {
            toast.success("Successfully login  !", {
              position: "top-left",
            });
          };

          showToastMessage();
        })
        .catch((error) => {
          console.log(error);
          const showToastMessage = () => {
            toast.error(error.message, {
              position: "top-left",
            });
          };
          showToastMessage();
        });
    }
  };

  return (
    <div>
      <div>
        <img
          className="w-full h-[200px] object-center"
          src="https://images.unsplash.com/photo-1565793643995-45bda0f984bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
          alt="Shoping Image"
        />
      </div>
      <section class="flex items-center justify-center min-h-70vh md:p-20 p-5 bg-white text-gray-400">
        <div class="bg-gray-900 p-10 w-full max-w-md rounded-lg">
          <h2 class="text-white text-3xl mb-1 font-medium title-font">Login</h2>
          <div class="mb-4 mt-4">
            <label for="name" class="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              onChange={(e) => handlechange(e)}
              type="text"
              id="email"
              name="useremail"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="mb-4 mt-4">
            <label for="email" class="leading-7 text-sm text-gray-400">
              Password
            </label>
            <input
              onChange={(e) => handlechange(e)}
              type="password"
              id="password"
              name="userpassword"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            onClick={() => handlelogin()}
            class="text-white mt-4 cursor-pointer bg-indigo-500 border-0 py-2 px-6 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
          <p class="text-sm text-gray-400 text-opacity-90 mt-3">
            Have you signed up ?{" "}
            <NavLink to="/Signup" className="text-indigo-500 cursor-pointer">
              Sign up
            </NavLink>
            .
          </p>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Login;
