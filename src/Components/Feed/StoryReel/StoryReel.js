import React from "react";
import Story from "./Story";
import {data} from './data'
import './StoryReel.css'
const StoryReel=()=> {
  return (
    <div className="storyReel">
        {data.map((items)=>{
            return(
            <Story
              image={items.image}
              profileSrc={items.profileSrc}
              title={items.title}
            />
            )
        })}
    </div>
  );
}

export default StoryReel;
