import React from "react";
import {data} from './data'
import "./Widget.css";
function Widget() {
    const src = data[Math.floor(Math.random()*data.length)];
  return (
    <div>
      <iframe
        src={src}
        width="360"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="harsh"
      ></iframe>
    </div>
  );
}

export default Widget;
