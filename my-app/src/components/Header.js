import React from "react";
import "./style.css";
import { BtnOptionsMobile } from './BtnMenu';
import { BtnHome } from './BtnHome';

export const Header = () => {
    return (
        <>
        <div className="header">
            <BtnHome />
            <BtnOptionsMobile />
        </div>
        
        </>
    );
};
