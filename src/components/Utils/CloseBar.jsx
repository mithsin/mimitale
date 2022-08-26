import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CloseBar = ({setClose, color, size}) => {
    const wrapperStyle = {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center',
        width: "100%",
        height: "50px"
    }
    return(
        <div style={wrapperStyle}>
            <FontAwesomeIcon 
                icon={faTimes}
                size={size || "2x"} 
                style={{color: color ? color : "black", cursor: 'pointer' }}
                onClick={()=> setClose(false)}/>
        </div>
    )
};

export default CloseBar;