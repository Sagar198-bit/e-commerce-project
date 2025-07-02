import { useState } from "react";
import mycontext from "./Estore";
const ContextProvider = ({ children }) => {
  const [prodcutsName, setProductsName] = useState("");
  const [addcart, setaddcart] = useState([]);
  const[username , setusername] = useState('');

  const addProdcutsName = (value) => {
    setProductsName(value);
  };

  const addToCart = (productdetails) => {
    const isInCart = addcart.some((item) => item.id === productdetails.id);

    if (!isInCart) {
      setaddcart((prev) => [...prev, { ...productdetails, Quantity: 1 }]);
    } else {
      setaddcart((prev) =>
        prev.map((item) =>
          item.id === productdetails.id
            ? { ...item, Quantity: item.Quantity + 1 }
            : item
        )
      );
    }
  };

    const setloginusername = (name) =>{
      setusername(name)
    }
 

  const incrementQuntity = (id) => {
  setaddcart((previous) =>
    previous.map((items) =>
      items.id === id
        ? { ...items, Quantity: items.Quantity + 1 }
        : items
    )
  );
};


const decremanetQuntity = (id) => {
  setaddcart((previous) =>
    previous.map((items) =>
      items.id === id && items.Quantity > 1
        ? { ...items, Quantity: items.Quantity - 1 }
        : items
    )
  );
};

  const removetocart = (productid) => {
    setaddcart(addcart.filter((items) => items.id !== productid));
  };

  return (
    <mycontext.Provider
      value={{
        prodcutsName,
        addProdcutsName,
        addcart,
        username,
        addToCart,
        removetocart,
        decremanetQuntity,
        incrementQuntity
        ,setloginusername
      }}
    >
      {children}
    </mycontext.Provider>
  );
};

export default ContextProvider;
