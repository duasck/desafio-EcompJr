import React from "react";
import "./style.css";
import { BtnMenu } from './BtnMenu';
import { BtnHome } from './BtnHome';


export const Header = () => {
    return (
        <div className="header">
            <BtnHome />
            <BtnMenu />
        </div>
    );
};
