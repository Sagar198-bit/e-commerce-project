import { app } from "../../Firebaseauth/FirebaseAuth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
function Contact() {
  const [contactinformation, setcontactinformation] = useState({
    email: "",
    message: "",
  });
  const db = getFirestore(app);

  const handlechange = (e) => {
    setcontactinformation({
      ...contactinformation,
      [e.target.name]: e.target.value,
    });
    console.log(contactinformation);
  };

  const handlesubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "usersinfo"), {
        email: contactinformation.email,
        message: contactinformation.message,
      });
      if(docRef){
        setcontactinformation({email : "" , message:""})
        const showToastMessage = () => {
          toast.success("Successfully Sent", {
            position: "top-left",
          });
        };

        showToastMessage();
      }
    } catch (e) {
      const showToastMessage = () => {
          toast.error(e.message, {
            position: "top-left",
          });
        };

        showToastMessage();
    }
  };
  return (
    <section class="text-gray-600 p-20 font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Ambala%20Haryana%20India&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-xl mb-2 font-medium title-font">
            Contact Us
          </h2>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={(e) => handlechange(e)}
              type="email"
              id="email"
              value={contactinformation.email}
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              onChange={(e) => handlechange(e)}
              value={contactinformation.message}
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            onClick={handlesubmit}
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
          
        </div>
      </div>
    <ToastContainer />
    </section>
    
  );
}

export default Contact;
