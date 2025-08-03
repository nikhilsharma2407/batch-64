import FunctionalComponent from "./FunctionalComponent";
import Products from "./Products";
import Routing from "./Routing";

const routes = [
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "routing/:productId",
    element: <Routing />,
  },
  { path: "test", element: <h1>abcd</h1> },
  {
    path: "parent",
    element: <h1>Parent</h1>,
    children: [
      { path: "child-1", element: <h1>Child-1</h1> },
      { path: "child-2", element: <h1>Child-2</h1> },
      { path: "child-3", element: <h1>Child-3</h1> },
    ],
  },
];

export default routes;
