import React from "react";





function Button (props){


   
    
// Variant Button Config
const variantTitle = props.variant ? `variant ="` + props.variant + `"`: null ;
const variantClass = props.variant ? "Btn"  + props.variant : null ;



// Disable Button Config

const disableshadowTitle = props.disableshadow? "disableShadow": null;
const disableshadowClass = props.disableshadow? "disableShadow": null;

// Goole Icons config

// icon to the left
const setStartIconTitle = props.startIcon ? `startIcon ="` + props.startIcon + `"` : null;
var setStartIcon = <span class="material-icons"> {props.startIcon}</span>;
// icon to the right
const setEndIconTitle = props.endIcon ? `endIcon ="` + props.endIcon + `"`: null;
var setEndIcon =  <span class="material-icons"> {props.endIcon}</span>;


return (
<div className="cards">
<div className="buttonCard">
<p> {"<Button"} {variantTitle} {disableshadowTitle} {setStartIconTitle} {setEndIconTitle} {" />"} </p>
<button className={variantClass + " " + disableshadowClass }>
<p>{setStartIcon} Default {setEndIcon}</p>
</button>

</div>


</div>
)
}


export default Button;