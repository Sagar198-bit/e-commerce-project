import { useContext, useEffect, useState } from "react";
import mycontext from "../../context/Estore";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { app } from "../../Firebaseauth/FirebaseAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function Cart() {
  const navigate = useNavigate();
  const { addcart, removetocart, incrementQuntity, decremanetQuntity } =
    useContext(mycontext);
  const [checkpayment, setcheckpayment] = useState(false);
  const [ispageactive, setpageactive] = useState(false);


  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setpageactive(true);
      } else {
        setpageactive(false);
      }
    });
  }, []);
  const [cupponcode, setcupponcode] = useState("");
  const [isapply, setapply] = useState(false);

  const handleClick = (id) => {
    removetocart(id);
  };

  const handleapply = (e) => {
    e.preventDefault();
    if (cupponcode === "TAX-109") {
      setapply(true);
    }
  };

  const priceofallproducts = addcart.reduce(
    (acc, curr) => acc + curr.price * curr.Quantity,
    0
  );

  return (
    <div>
      {addcart && addcart.length > 0 ? (
        <section class="bg-white py-8 antialiased dark:bg-white md:py-16">
          <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 class="text-xl font-semibold text-gray-900  sm:text-2xl">
              Shopping Cart
            </h2>

            <div class="mt-6 sm:mt-8  md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div class="mx-auto w-full  flex-none lg:max-w-2xl xl:max-w-4xl">
                {addcart.map((items) => (
                  <div class="space-y-6 mb-2">
                    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" class="shrink-0 md:order-1">
                          <img
                            class="h-20 w-20 dark:hidden"
                            src={items.images[0]}
                            alt="imac image"
                          />
                          <img
                            class="hidden h-20 w-20 dark:block"
                            src={items.images[0]}
                            alt="imac image"
                          />
                        </a>

                        <label for="counter-input" class="sr-only">
                          Choose quantity:
                        </label>
                        <div class="flex items-center justify-between md:order-3 md:justify-end">
                          <div class="flex  items-center">
                            <button
                              onClick={() => decremanetQuntity(items.id)}
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg
                                class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <input
                              type="text"
                              id="counter-input"
                              data-input-counter
                              class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                              placeholder=""
                              value={items.Quantity}
                              required
                            />
                            <button
                              type="button"
                              id="increment-button"
                              onClick={() => incrementQuntity(items.id)}
                              data-input-counter-increment="counter-input"
                              class="inline-flex cursor-pointer h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg
                                class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div class="text-end md:order-4 md:w-32">
                            <p class="text-base font-bold text-gray-900 dark:text-white">
                              ${(items.price * items.Quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a
                            href="#"
                            class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                          >
                            {items.description.slice(0, 200)}
                          </a>

                          <div class="flex mt-3 items-center gap-4">
                            <p class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                              {items.title}
                            </p>

                            <button
                              type="button"
                              onClick={() => handleClick(items.id)}
                              class="inline-flex cursor-pointer items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg
                                class="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p class="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </p>

                  <div class="space-y-4">
                    <div class="space-y-2">
                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd class="text-base font-medium text-gray-900 dark:text-white">
                          ${priceofallproducts.toFixed(2)}
                        </dd>
                      </dl>

                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd class="text-base font-medium text-gray-900 dark:text-white">
                          {isapply ? (
                            <p className="line-through">$10</p>
                          ) : (
                            <p>$10</p>
                          )}
                        </dd>
                      </dl>
                    </div>

                    <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt class="text-base font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd class="text-base font-bold text-gray-900 dark:text-white">
                        $
                        {!isapply
                          ? `${(priceofallproducts - 10).toFixed(2)}`
                          : `${priceofallproducts.toFixed(2)}`}
                      </dd>
                    </dl>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => checkpageactive(e)}
                    class="flex w-full items-center bg-green-500 justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </a>

                  <div class="flex items-center justify-center gap-2">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {" "}
                      or{" "}
                    </span>

                    <a
                      onClick={() => navigate(-1)}
                      href="#"
                      title=""
                      class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <form class="space-y-4">
                    <div>
                      <label
                        for="voucher"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {isapply ? (
                          <p className="text-green-400">
                            congratulations cuppon code applied
                          </p>
                        ) : (
                          "Apply TAX-109 to Save $10"
                        )}
                      </label>
                      <input
                        onChange={(e) => setcupponcode(e.target.value)}
                        type="text"
                        id="voucher"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <button
                      onClick={(e) => handleapply(e)}
                      type="submit"
                      class="flex w-full items-center justify-center bg-indigo-500 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Apply Code
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center py-40">
          <h2 className="text-2xl font-semibold">🛒 Your cart is empty!</h2>
          <p className="text-gray-600 mt-2">Add some items to see them here.</p>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Cart;
