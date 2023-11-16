import React from "react";
import "./style.css";

export const Sessao = ({ textoH1, textoP, imagem }) => {
    return (
        <div className="sessao">
            <div className="texto-e-icon">
                {imagem}
                <h1 className="text-wrapper">{textoH1}</h1>
            </div>
            <p className="textoP">{textoP}</p>
        </div>
    );
};