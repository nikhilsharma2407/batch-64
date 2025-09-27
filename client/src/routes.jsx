import FunctionalComponent from "./FunctionalComponent";
import Products from "./Products";
import Parent, { Child1, Child2, Child3 } from "./Routing/Parent";
import Routing from "./Routing";
import UserCart from "./UserCart";
import ProtectedRoute from "./ProtectedRoute";
import Orders from "./Orders";
import Signup from "./Signup";
import ReactHooks from "./ReactHooks/ReactHooks";
import Counter from "./Counter";
import Login from "./Login";
import EditableProduct from "./Products/ProductsCard/EditableProduct";
import Cart from "./Cart";

const routes = [
  {
    path: "",
    element: <Products />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "routing/:productId",
    element: <Routing />,
  },
  { path: "test", element: <h1>abcd</h1> },
  { path: "login", element: <Login /> },
  { path: "hooks", element: <ReactHooks /> },
  { path: "counter", element: <Counter /> },
  
  { path: "product/edit/:id", element: <EditableProduct /> },
  
  {
    path: "user",
    element: <ProtectedRoute />,
    children: [
      { path: "cart", element: <Cart /> },
      { path: "orders", element: <Orders /> }
    ],
  },
  {
    path: "parent",
    element: <Parent />,
    children: [
      { path: "child-1", element: <Child1 /> },
      { path: "child-2", element: <Child2 /> },
      { path: "child-3", element: <Child3 /> },
    ],
  },
];

export default routes;
