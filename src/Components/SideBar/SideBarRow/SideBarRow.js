import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarRow.css'

function SideBarRow(props) {
    const title=props.title;
    const src=props.src;
    const Icon=props.Icon;
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow

