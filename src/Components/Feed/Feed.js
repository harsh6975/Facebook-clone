import React from "react";
import MessageSender from "./MessageSender/MessageSender";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";
import Post from "./Post/Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
