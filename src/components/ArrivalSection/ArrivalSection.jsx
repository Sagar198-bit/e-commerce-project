
import mycontext from "../../context/Estore";
import useArrivalProducts from "../../hooks/useArrivalProducts/useArrival";
import Product from "../../pages/Products/Product";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const ArrivalSection = () => {
  const data = useArrivalProducts();
  const{addToCart} = useContext(mycontext)
  

  return (
    <div>
      <div className="flex flex-wrap ">
        <h1 className="md:text-[30px] text-[25px] text-center md:text-start px-10 py-5">
          New Arrivals
        </h1>
        <section className="text-gray-600 w-100vw body-font">
          <div className="container px-10 py-5  flex flex-wrap  mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((prodcuts) => (
                <NavLink to={`/singleProduct/${prodcuts.id}`} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-contain"
                      src={prodcuts.images[0]}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {prodcuts.brand}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {Product.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{prodcuts.description}</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          <button onClick={() => addToCart(prodcuts)} className="bg-indigo-500 cursor-pointer py-1.5 mt-2 px-6 rounded text-white">
                            Add to cart
                          </button>
                        </a>
                        <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          ${prodcuts.price}
                        </span>
                        <span className="text-gray-400 md:visible hidden md:inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
              ;
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ArrivalSection;
