import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import WatchVideo from "./Components/WatchVideo";
import MainContainer from './Components/MainContainer'
import store from "./Utils/store";
import SearchScreen from "./Components/SearchScreen";
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
  const App = () => {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="box-border">
          <Head />
          <Routes>
            <Route path="/" element={<Body/>} exact>
              <Route path="/" element={<MainContainer />}/>
              <Route path="/watch" element={<WatchVideo/>}/>
              <Route path="/results" element={<SearchScreen/>}/>
            </Route>

            <Route />
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    );
  };

export default App;
