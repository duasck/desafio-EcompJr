import "./style.css";

const voltar = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="34" viewBox="0 0 20 34" fill="none">
    <path d="M16.6667 33.6667L0 17L16.6667 0.333374L19.625 3.29171L5.91667 17L19.625 30.7084L16.6667 33.6667Z" fill="#1C1B1F" />
</svg>)


export const BtnVoltar = ({handleMenuClick}) => {
    return (<div id="voltar" onClick={(e) => handleMenuClick()} className="voltar"> {voltar}  </div>);
};
