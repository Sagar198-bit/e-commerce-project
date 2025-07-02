
import { MdLocalShipping } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import TProducts from "../../components/TrendingProducts/TProucts";
import ArrivalSection from "../../components/ArrivalSection/ArrivalSection";
import Gallery from "../../components/Gallery/Gallery";
import { NavLink } from "react-router-dom";
import Laptopimage from "../../assets/images/HomeLaptop.png";
import 'animate.css';

function Home() {
  return (
    <div>
      <div className="bg-[#e3edf6] min-h-screen flex justify-center items-center text-black p-10 xl:p-5">
        <section class="text-black h-[100%] flex justify-center items-center ">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-5xl animate__animated animate__bounceInLeft  text-4xl mb-4 font-medium text-black">
                The best Notebook
                <br class="hidden lg:inline-block" />
                collection 2024
              </h1>
              <p class="mb-8 leading-relaxed animate__animated animate__bounceInLeft animate__delay-1s">
                Sleek aluminum design, fast boot speed, crystal-clear display,
                long battery life, backlit keyboard, silent fan cooling,
                lightweight build for travel. Smooth multitasking with SSD
                storage, sharp video calls, powerful processor, modern ports,
                responsive touchpad, smart charging, and seamless Wi-Fi for
                everyday work and streaming.
              </p>
              <div class="flex justify-center animate__animated animate__bounceInLeft animate__delay-1s">
                <NavLink
                  to="/Product"
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full animate__animated animate__bounceInRight animate__delay-1s w-[300px]">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={Laptopimage}
              />
            </div>
          </div>
        </section>
      </div>
      <div className=" p-5 flex flex-wrap   gap-5 items-center justify-evenly">
        <div className="flex animate__animated  animate__bounceInUp rounded-2xl text-black bg-[#f3f4f6] p-5 px-10 gap-2">
          <MdLocalShipping size={30} />
          <div>
            <p className="text-[20px] font-semibold">Free Delivery</p>
            <p>Orders from all items</p>
          </div>
        </div>

        <div className="flex rounded-2xl animate__animated  animate__bounceInUp  text-black bg-[#f3f4f6] p-5 px-10 gap-2">
          <RiRefund2Line size={30} />
          <div>
            <p className="text-[20px] font-semibold">Return & Refund</p>
            <p>Money back guarantee</p>
          </div>
        </div>
        <div className="flex rounded-2xl animate__animated  animate__bounceInUp  text-black bg-[#f3f4f6] p-5 px-10 gap-2">
          <CiDiscount1 size={30} />
          <div>
            <p className="text-[20px] font-semibold">Member Discount</p>
            <p>On order over $99</p>
          </div>
        </div>
        <div className="flex rounded-2xl animate__animated  animate__bounceInUp  text-black bg-[#f3f4f6] p-5 px-10 gap-2">
          <MdOutlineSupportAgent size={30} />
          <div>
            <p className="text-[20px] font-semibold">Support 24/7</p>
            <p>Contact us 24 hoursday</p>
          </div>
        </div>
      </div>
      <TProducts />
      <Gallery />
      <ArrivalSection />
    </div>
  );
}

export default Home;
