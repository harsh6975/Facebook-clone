import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // db

    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's on your mind"
          />
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit"></button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
