import React from "react";
import useCollapse from "react-collapsed";
import './ExpandMenu.css'

function ExpandMenu(props){
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

    return(
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                <div className="title">{props.title}</div>
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

export default ExpandMenu;