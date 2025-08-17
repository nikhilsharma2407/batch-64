import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import countReducer from "./reducers/countReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import UserContextProvider from "./UserContextProvider";
import ApiContextProvider from "./ApiContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

root.render(
  <ApiContextProvider>
    <UserContextProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </UserContextProvider>
  </ApiContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
