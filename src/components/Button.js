import React from "react";

function Button({buttonType, children, isDisabled}){
    return(
        <button type={buttonType} disabled={isDisabled}>
            {children}
        </button>
    )
}

export default Button;