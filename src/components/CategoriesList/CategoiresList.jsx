import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import mycontext from "../../context/Estore";

function CategoiresList() {
  const { addProdcutsName } = useContext(mycontext);

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const FetchAllCategory = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list?limit=16&skip=16"
        );
        if (!response.ok) {
          throw new Error(
            "There was an error ouccred in category sections Api"
          );
        }
        const data = await response.json();
        setcategories(
          data.map((items) => items.charAt(0).toUpperCase() + items.slice(1))
        );
      } catch (err) {
        console.log(err);
      }
    };
    FetchAllCategory();
  }, []);

  if (categories.length === 0) {
    return (
      <div className="flex   flex-wrap justify-center items-center gap-x-15 gap-y-10">
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>

       <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
       <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>

        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
       <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
       <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
        <div className="cursor-pointer  bg-[#f3f4f6]   py-4 px-6 lg:w-2xs md:w-3xs  w-full rounded ">
          <div className="px-4 w-[50%] skelton py-3"></div>
          <br />
          <div className="px-10 skelton py-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex   flex-wrap justify-center items-center gap-x-15 gap-y-5">
      {categories.map((items, index) => (
        <div
          key={index}
          className="cursor-pointer  bg-[#f3f4f6] py-2 px-6 lg:w-2xs md:w-3xs  w-full rounded "
        >
          <p className="text-lg ">{items}</p>
          <NavLink
            to={`/categories/${items}`}
            onClick={() => addProdcutsName(items)}
            className="text-indigo-500"
          >
            View Prodcuts
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default CategoiresList;
