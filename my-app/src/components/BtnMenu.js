import React from "react";
import "./style.css";

export const BtnMenu = ({btn}) => {
    return (
        <div className="btn-options-mobile" onEvent={btn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#DBE9F5" stroke-width="2" />
                <line x1="0.5" y1="9" x2="25.5" y2="9" stroke="#DBE9F5" stroke-width="2" />
                <line x1="0.5" y1="17" x2="25.5" y2="17" stroke="#DBE9F5" stroke-width="2" />
            </svg>
        </div>
    )
};

