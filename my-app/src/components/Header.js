import React from "react";
import "./style.css";
import { BtnHome } from './BtnHome';


export const Header = ({button}) => {
    return (
        <div className="header">
            <BtnHome />
            {button}
        </div>
    );
};
