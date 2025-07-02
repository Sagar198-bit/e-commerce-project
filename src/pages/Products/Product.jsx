import "../../index.css";
import useProducts from "../../hooks/useProducts/useProdcuts";
import { useEffect, useState } from "react";
import { useContext } from "react";
import mycontext from "../../context/Estore";
import { NavLink } from "react-router-dom";
function Product() {
  const [Prodcuts, setProducts] = useState([]);
  const [options, setoptions] = useState("");
  const { addToCart } = useContext(mycontext);
  
  const data = useProducts();
  useEffect(() => {
    setProducts(data);
  }, [data]);

  useEffect(() => {
    if (options === "Default") {
      setProducts(data);
    }
    if (options === "Low To High") {
      setProducts([...data].sort((a, b) => a.price - b.price));
    }
    if (options === "High To Low") {
      setProducts([...data].sort((a, b) => b.price - a.price));
    }
  }, [options]);

 
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <h1 className="text-[20px]">Products</h1>
        <select
          onChange={(e) => setoptions(e.target.value)}
          className="border border-black rounded p-1 cursor-pointer"
        >
          <option value="Default">Default</option>
          <option value="Low To High">Price(Low To High)</option>
          <option value="High To Low">Price(High To Low)</option>
        </select>
      </div>
      <div>
        <section class="text-gray-600 w-100vw body-font">
          <div class="container px-5 py-5  flex flex-wrap  mx-auto">
            <div class="flex flex-wrap -m-4">
              {Prodcuts.map((prodcut) => (
                <NavLink to={`/singleProduct/${prodcut.id}`} className="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36  w-full object-contain"
                      src={prodcut.images[0]}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-black mb-1">
                        {prodcut.brand}
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        {prodcut.title}
                      </h1>
                      <p class="leading-relaxed mb-3">{prodcut.description}</p>
                      <div class="flex items-center flex-wrap ">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          <button onClick={() => addToCart(prodcut)} className="bg-indigo-500 cursor-pointer py-1.5 mt-2 px-6 rounded text-white">
                            Add to cart
                          </button>
                        </a>
                        <span class="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          ${prodcut.price}
                        </span>
                        <span class="text-gray-400 md:visible hidden md:inline-flex items-center leading-none text-sm">
                          <svg
                            class="w-4 h-4 mr-1"
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
      <div></div>
    </div>
  );
}

export default Product;
