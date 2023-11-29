import React from "react";
import "./style.css";

export const BtnMaior = ({texto, tag}) => {
    return (
        <div className="btnMaior">
            <li className={tag} >{texto}</li>
        </div>
    );
};
