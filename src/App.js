import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import WatchVideo from "./Components/WatchVideo";
import MainContainer from './Components/MainContainer'
import store from "./Utils/store";
/*
-Head
-Body 
 -sidebar
  -MenuItems
 -mainContainer
  -buttonList
  -videoContainer
   -videoCard (many) 
   */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div className="box-border">
        <Head />
        <RouterProvider router={router}/>
      </div>
    </Provider>
  );
};
export default App;
