import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import WatchVideo from "./Components/WatchVideo";
import MainContainer from './Components/MainContainer'
import SearchScreen from "./Components/SearchScreen";

  const App = () => {
    const isDarkMode = useSelector(store=>store.app.isDarkMode);
    return (
      <BrowserRouter>
        <div className={`box-border ${isDarkMode && 'dark'} `}>
        <div className="dark:bg-black">
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
        </div>
      </BrowserRouter>
    );
  };

export default App;
