import React from "react";
import "./style.css";

export const Componente = ({ titulo, paragrafo }) => {
    return (
        <div className="componente">
            <h2 className="text-wrapper">{titulo}</h2>
            <p className="paragrafo">{paragrafo} </p>
        </div>
    );
};
