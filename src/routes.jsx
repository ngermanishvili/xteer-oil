import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/ContactUs/Contact";
import Products from "./Pages/Product";
import OilProductsList from "./Pages/OilProductsList";

const routes = [
  {
    name: "Main",
    route: "/",
    path: "/",
    element: <Home />,
  },
  {
    name: "About us",
    route: "/about",
    path: "aboutUs",

    element: <AboutUs />,
  },
  {
    name: "Contact",
    route: "/contact",

    path: "contact",
    element: <Contact />,
  },
  {
    name: "Product",
    route: "/find-my-oil",
    path: "products",
    element: <OilProductsList />,
  },
  {
    name: "",
    route: "/product/:productId",
    path: "productId",
    element: <Products />,
  },
];

export default routes;
