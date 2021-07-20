import React from "react";
import {
  ChatOutlined,
  EmojiFlags,
  ExpandMore,
  LocalHospitalOutlined,
  PeopleAlt,
  VideoLibrary,
} from "@material-ui/icons";
import SideBarRow from "./SideBarRow/SideBarRow";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      {/* <SideBarRow src={user.photoURL} title={user.displayName}/> */}
      <SideBarRow Icon={LocalHospitalOutlined} title="Covid 19 Information" />
      <SideBarRow Icon={EmojiFlags} title="Pages" />
      <SideBarRow Icon={PeopleAlt} title="Friends" />
      <SideBarRow Icon={PeopleAlt} title="Friends" />
      <SideBarRow Icon={ChatOutlined} title="Marketplace" />
      <SideBarRow Icon={VideoLibrary} title="Videos" />
      <SideBarRow Icon={ExpandMore} title="Friends" />
    </div>
  );
}

export default SideBar;
