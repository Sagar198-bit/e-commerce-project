import { Outlet } from "react-router-dom";

function Categories() {
  

  return (
    <div className=" lg:p-8 md:p-8 p-5 w-full">
      <Outlet />
    </div>
  );
}

export default Categories;
