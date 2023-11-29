import React from "react";
import { BtnMaior } from './BtnMaior';
import "./style.css";



export const SideMenu = ({button}) =>{
    return (
        <div className="sideMenu">
           {button}
            <ul className="nav">
                <BtnMaior texto={'Cadastro/Login'} tag='login' />
                <BtnMaior texto={'Contato'} tag='contato' />
                <BtnMaior texto={'Quem somos'} tag='quem' />
                <BtnMaior texto={'Visão'} tag='visao' />
                <BtnMaior texto={'Missão'} tag='missao' />
                <BtnMaior texto={'Valores'} tag='valores' />
            </ul>
        </div>
    );
};
