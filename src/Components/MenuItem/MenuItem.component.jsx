import React from "react";
import { withRouter } from "react-router";
import './MenuItem.styles.scss';

const MenuItem =  ({id, title, imageUrl, linkUrl, size, history}) => (
    <div className = {`${size} menu-item`} onClick = {() => history.push(`${linkUrl}`)} >  
        <div className = 'background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className = 'content'>
            <h2 className = 'title'>{title.toUpperCase()}</h2>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);