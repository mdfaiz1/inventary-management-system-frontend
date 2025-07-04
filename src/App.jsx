import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";
import Location from "./pages/location";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import SubLocation from "./pages/sub-location";
import AddProduct from "./pages/products/layouts/AddProduct";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          // element: <DashboardPage />,
          element: <h1 className="title">Dashboard</h1>,
        },
        {
          path: "Location",
          element: <Location />,
        },
        {
          path: "sub-location",
          element: <SubLocation />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "new-customer",
          element: <h1 className="title">New Customer</h1>,
        },
        {
          path: "verified-customers",
          element: <h1 className="title">Verified Customers</h1>,
        },
        {
          path: "products",
          element: <h1 className="title">Products</h1>,
        },
        {
          path: "new-product",
          element: <h1 className="title">New Product</h1>,
        },
        {
          path: "inventory",
          element: <h1 className="title">Inventory</h1>,
        },
        {
          path: "settings",
          element: <h1 className="title">Settings</h1>,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
