import React from "react";
import "./style.css";
import imagem from '../assets/Nome_sem_fundo_black_grande.png'

export const Image = () => {
    return (
        <div className="image" >
            <img src={imagem} alt="Logo Ecomp" className='logo-ecomp'/>
        </div>
    );
};
