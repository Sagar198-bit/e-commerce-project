import { getAuth } from "firebase/auth";
import { app } from "../../Firebaseauth/FirebaseAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const auth = getAuth(app);

  const navigate = useNavigate()
  const [details, setdetails] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });

  console.log(details);
  const handlechange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  const handelsignup = () => {
    if (
      details.useremail === "" ||
      details.useremail === "" ||
      details.userpassword === ""
    ) {
      const Filedchecked = () => {
        toast.error("All Field Requied !", {
          position: "top-left",
        });
      };

      Filedchecked();
    } else {
      createUserWithEmailAndPassword(
        auth,
        details.useremail,
        details.userpassword
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            const showToastMessage = () => {
              toast.success("Successfully Signed Up !", {
                position: "top-left",
              });
              
            };
            
            showToastMessage();
            updateProfile(auth.currentUser, {
              displayName: details.username,
              
            })
              .then(() => {
                console.log("Profile Upadted")
              })
              .catch((error) => {
                console.log("Error Ocrred")
              });
              
          }
          setTimeout(() => {
            navigate("/Login");
          }, 2000);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
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
      <section class="flex items-center justify-center min-h-auto md:p-20 p-5 bg-white text-gray-400">
        <div class="bg-gray-900 p-10 w-full max-w-md rounded-lg">
          <h2 class="text-white text-3xl mb-1 font-medium title-font">
            Signup
          </h2>
          <div class="mb-4 mt-4">
            <label for="name" class="leading-7 text-sm text-gray-400">
              Name
            </label>

            <input
              onChange={(e) => handlechange(e)}
              type="text"
              id="name"
              name="username"
              value={details.username}
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="mb-4 mt-4">
            <label for="email" class="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              onChange={(e) => handlechange(e)}
              type="email"
              id="email"
              value={details.useremail}
              name="useremail"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="mb-4 mt-4">
            <label for="email" class="leading-7 text-sm text-gray-400">
              Pasword
            </label>
            <input
              onChange={(e) => handlechange(e)}
              type="password"
              id="password"
              name="userpassword"
              value={details.userpassword}
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            onClick={() => handelsignup()}
            class="text-white mt-4 cursor-pointer bg-indigo-500 border-0 py-2 px-6 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Sign up
          </button>
          <p class="text-sm text-gray-400 text-opacity-90 mt-3">
            Have you signed up ?{" "}
            <NavLink to="/Login" className="text-indigo-500 cursor-pointer">login</NavLink>.
          </p>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Signup;
