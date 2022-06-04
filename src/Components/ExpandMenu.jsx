import React from "react";
import useCollapse from "react-collapsed";
import './ExpandMenu.css'
var a;
function getProps() {
    return a;  
}
function ExpandMenu(props){
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();
   a=props;
    return(
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                <div className="title">{props.title}</div>
                <div className="date">{props.date}</div>
            </div>

            <div {...getCollapseProps()}>
                <div className="content">
                    <div className="menu-item">
                        {props.children}
                    </div>
                </div>

            </div>
        </div>
    );
}

export  {ExpandMenu,getProps};