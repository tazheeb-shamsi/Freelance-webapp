import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import GigList from "./pages/Gig/GigList";
import AddGig from "./pages/Gig/AddGig";
import MyGigs from "./pages/Gig/MyGigs";
import ViewGig from "./pages/Gig/ViewGig";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Orders from "./pages/Order/Orders";
import MessageList from "./pages/Messages/MessageList";
import ViewMessage from "./pages/Messages/ViewMessage";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Pay from "./pages/Pay/Pay";
import Success from "./pages/Success/Success";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <GigList />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <MessageList />,
        },
        {
          path: "/message/:id",
          element: <ViewMessage />,
        },
        {
          path: "/add",
          element: <AddGig />,
        },
        {
          path: "/gig/:id",
          element: <ViewGig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/pay/:id",
      element: <Pay />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
