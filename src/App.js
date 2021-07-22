import React from "react";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import Widget from "./Components/Widget/Widget";
import Login from "./Components/Login/Login";
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(dispatch);
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Navbar />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}
export default App;
