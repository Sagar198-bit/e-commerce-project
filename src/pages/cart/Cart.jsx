import { useContext, useEffect, useState } from "react";
import mycontext from "../../context/Estore";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { app } from "../../Firebaseauth/FirebaseAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function Cart() {
  const navigate = useNavigate();
  const {
    addcart,
    removetocart,
    removecart,
    incrementQuntity,
    decremanetQuntity,
  } = useContext(mycontext);

  const [ispageactive, setpageactive] = useState(false);
  const [isPaymentPageActive, setPaymentPageActive] = useState(false);
  const [userdetails, setuserdetails] = useState({
    user_first_name: "",
    user_second_name: "",
    user_email: "",
    user_address: "",
    user_city: "",
    user_state: "",
    user_zip_code: "",
    user_phone_number: "",
  });

  const checkuserdetails = () => {
    if (
      userdetails.user_first_name === "" ||
      userdetails.user_second_name === "" ||
      userdetails.user_email === "" ||
      userdetails.user_address === "" ||
      userdetails.user_city === "" ||
      userdetails.user_state === "" ||
      userdetails.user_zip_code === "" ||
      userdetails.user_phone_number === ""
    ) {
      const showToastMessage = () => {
        toast.error("All Fields required", {
          position: "top-left",
        });
      };

      showToastMessage();
    } else {
      const showToastMessage = () => {
        toast.success("Payment SuccesFully", {
          position: "top-left",
        });
      };

      showToastMessage();
      setTimeout(() => {
        navigate("/");
      }, 500);
      removecart();
    }
  };

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

  const checkpage = () => {
    if (ispageactive) {
      setPaymentPageActive(true);
    } else {
      const showToastMessage = () => {
        toast.error("Please login First  !", {
          position: "top-left",
        });
      };

      showToastMessage();

      setTimeout(() => {
        navigate("/Login");
      }, 1000);
    }
  };
  const handleapply = (e) => {
    e.preventDefault();
    if (cupponcode === "TAX-109") {
      setapply(true);
    }
    setcupponcode("");
  };

  const priceofallproducts = addcart.reduce(
    (acc, curr) => acc + curr.price * curr.Quantity,
    0
  );

  return (
    <div>
      {!isPaymentPageActive ? (
        addcart && addcart.length > 0 ? (
          <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Shopping Cart
              </h2>
              <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  {addcart.map((items) => (
                    <div key={items.id} className="space-y-6 mb-2">
                      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1">
                            <img
                              className="h-20 w-20"
                              src={items.images[0]}
                              alt={items.title}
                            />
                          </a>
                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                onClick={() => decremanetQuntity(items.id)}
                                type="button"
                                className="inline-flex h-5 w-5 items-center justify-center rounded-md border bg-gray-100 hover:bg-gray-200"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={items.Quantity}
                                readOnly
                                className="w-10 text-center text-sm font-medium"
                              />
                              <button
                                onClick={() => incrementQuntity(items.id)}
                                type="button"
                                className="inline-flex h-5 w-5 items-center justify-center rounded-md border bg-gray-100 hover:bg-gray-200"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900">
                                ${(items.price * items.Quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="w-full flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a
                              href="#"
                              className="text-base font-medium text-gray-900 hover:underline"
                            >
                              {items.description.slice(0, 200)}
                            </a>
                            <div className="flex mt-3 items-center gap-4">
                              <p className="text-sm font-medium text-gray-500">
                                {items.title}
                              </p>
                              <button
                                onClick={() => handleClick(items.id)}
                                className="text-sm font-medium text-red-600 hover:underline"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                  <div className="space-y-4 border p-4 shadow-sm sm:p-6">
                    <p className="text-xl font-semibold">Order summary</p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <dl className="flex justify-between">
                          <dt>Original price</dt>
                          <dd>${priceofallproducts.toFixed(2)}</dd>
                        </dl>
                        <dl className="flex justify-between">
                          <dt>Tax</dt>
                          <dd>
                            {isapply ? (
                              <span className="line-through">$10</span>
                            ) : (
                              "$10"
                            )}
                          </dd>
                        </dl>
                      </div>
                      <dl className="flex justify-between border-t pt-2">
                        <dt>Total</dt>
                        <dd>
                          $
                          {isapply
                            ? priceofallproducts.toFixed(2)
                            : (priceofallproducts - 10).toFixed(2)}
                        </dd>
                      </dl>
                    </div>
                    <button
                      onClick={() => checkpage()}
                      className="w-full bg-green-500 text-white px-5 py-2.5 rounded-lg font-medium"
                    >
                      Proceed to Checkout
                    </button>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm text-gray-500">or</span>
                      <button
                        onClick={() => navigate(-1)}
                        className="text-sm font-medium text-blue-600 underline"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4 border p-4 shadow-sm sm:p-6">
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="voucher"
                          className="mb-2 block text-sm font-medium"
                        >
                          {isapply ? (
                            <p className="text-green-400">Coupon applied</p>
                          ) : (
                            "Apply TAX-109 to Save $10"
                          )}
                        </label>
                        <input
                          onChange={(e) => setcupponcode(e.target.value)}
                          type="text"
                          id="voucher"
                          className="block w-full rounded-lg border p-2.5 text-sm"
                          required
                        />
                      </div>
                      <button
                        onClick={handleapply}
                        type="submit"
                        className="w-full bg-indigo-500 text-white px-5 py-2.5 rounded-lg"
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
            <p className="text-gray-600 mt-2">
              Add some items to see them here.
            </p>
          </div>
        )
      ) : (
        <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center px-10">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            {/* Checkout Form */}
            <div className="w-full md:w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="user_first_name"
                    placeholder="First Name"
                    className="input py-2 px-6"
                    onChange={(e) =>
                      setuserdetails({
                        ...userdetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    name="user_second_name"
                    placeholder="Last Name"
                    className="input py-2 px-6"
                    onChange={(e) =>
                      setuserdetails({
                        ...userdetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  onChange={(e) =>
                    setuserdetails({
                      ...userdetails,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="input w-full py-2 px-6"
                />
                <input
                  type="text"
                  name="user_address"
                  placeholder="Street Address"
                  className="input w-full py-2 px-6"
                  onChange={(e) =>
                    setuserdetails({
                      ...userdetails,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    onChange={(e) =>
                      setuserdetails({
                        ...userdetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    placeholder="City"
                    name="user_city"
                    className="input py-2 px-6"
                  />

                  <input
                    type="text"
                    onChange={(e) =>
                      setuserdetails({
                        ...userdetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    placeholder="State"
                    name="user_state"
                    className="input py-2 px-6"
                  />
                  <input
                    type="text"
                    onChange={(e) =>
                      setuserdetails({
                        ...userdetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    placeholder="ZIP Code"
                    name="user_zip_code"
                    className="input py-2 px-6"
                  />
                </div>
                <input
                  type="text"
                  onChange={(e) =>
                    setuserdetails({
                      ...userdetails,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Phone Number"
                  className="input w-full p-3"
                  name="user_phone_number"
                />
              </form>
            </div>

            <div className="w-full md:w-1/3  bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <ul className="space-y-3 mb-6">
                {addcart.map((values) => {
                  return (
                    <li className="flex gap-3 justify-between">
                      <span>{values.title}</span>
                      <span>${values.price * values.Quantity}</span>
                    </li>
                  );
                })}
              </ul>
              <hr />
              <h2 className="mt-3 mb-3">Total Price : ${priceofallproducts}</h2>
              <button
                onClick={() => checkuserdetails()}
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Cart;
