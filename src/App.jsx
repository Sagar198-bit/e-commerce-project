import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Product from "./pages/Products/Product";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import CategoriesProcuts from "./components/product-Categories/CategoriesProcuts";
import CategoiresList from "./components/CategoriesList/CategoiresList";
import ContextProvider from "./context/Eprovider";
import Cart from "./pages/cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/contact/Contact";
import SingleProducts from "./pages/SingleProducts/SingleProduct";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Product",
        element: <Product />,
        children: [
          {
            path: "singleProduct/:id",
            element: <SingleProducts />,
          },
        ],
      },
      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            index: true,
            element: <CategoiresList />,
          },
          {
            path: ":name",
            element: <CategoriesProcuts />,
            children: [
              {
                path: "singleProduct/:id",
                element: <SingleProducts />,
              },
            ],
          },
        ],
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "singleProduct/:id",
        element: <SingleProducts />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={route} />
    </ContextProvider>
  );
};
export default App;
