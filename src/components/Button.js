import React, { useState } from "react";




function Button (props){


const [indicator, setIndicator] = useState("Default");

// const[isHover, switchHover] = useState(false);
const[isFocused, switchFocused] = useState(false);
   
    
// Variant Button Config
const variantTitle = props.variant ? `variant ="` + props.variant + `"`: " " ;
const variantClass = props.variant ? "Btn"  + props.variant : " " ;



// Disable Button Config

const disableshadowTitle = props.disableshadow  === "disableShadow" ? "disableShadow": " ";
const disableshadowClass = props.disableshadow  === "disableShadow" ? "disableShadow": " ";

//// Google Icons config

// icon to the left
const setStartIconTitle = props.startIcon ? `startIcon ="` + props.startIcon + `"` : "";
var setStartIcon = <span className="material-icons"> {props.startIcon}</span>;

// icon to the right
const setEndIconTitle = props.endIcon ? `endIcon ="` + props.endIcon + `"`: "";
var setEndIcon =  <span className="material-icons"> {props.endIcon}</span>;

//Size
const sizeTitle = props.size ? `size ="` + props.size + `"` : "";
var setSizeClass= props.size ? props.size : "";


// Colors
const colorTitle = props.color ? `color ="` + props.color + `"` : "";
var setColor= props.color ? props.color : "";


// Hover Focus Function
function focusHandler (){
    switchFocused(true);
}

function blurHandler(){
    switchFocused(false);
    setIndicator("Default")
}

function hoverHandler(){
    // switchHover(true);
    setIndicator("Hovered");
}

function mouseOutHandler(){
    // switchHover(false);
setIndicator(isFocused?"Focused":"Default")
}

return (
<div className="cards">
<div className="buttonCard">
<p> {"<Button"} {variantTitle} {disableshadowTitle} {setStartIconTitle} {setEndIconTitle} {sizeTitle} {colorTitle} {" />"} </p>
<button className={variantClass + " " + disableshadowClass + " " + setSizeClass + " " + setColor}  onMouseOut={mouseOutHandler} onMouseOver={hoverHandler}  onBlur={blurHandler} onFocus={focusHandler} >
<p>{setStartIcon} {indicator} {setEndIcon}</p>
</button>

</div>


</div>
)
}


export default Button;