import React from "react";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import Widget from "./Components/Widget/Widget";
import Login from "./Components/Login/Login";

export default function App() {
  const user = null;
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
