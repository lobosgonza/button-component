import React, { useState } from "react";




function Button (props){


const [indicator, setIndicator] = useState("Default");

// const[isHover, switchHover] = useState(false);
const[isFocused, switchFocused] = useState(false);
   
    
// Variant Button Config
const variantTitle = props.variant ? `variant ="` + props.variant + `"`: null ;
const variantClass = props.variant ? props.variant : null ;



// Disable Button Config

var disableshadowTitle = props.disableshadow === "false" ? "disableShadow ": "";
var disableshadowClass = props.disableshadow === "false" ? "disableShadow ": "";



// Disable Button
var disabledTitle = props.disabled === "true" ? "disabled ": "";
var disabledClass = props.disabled === "true" ? "disabled ": "";




//// Google Icons config


// icon to the left
var setStartIconTitle = !props.startIcon ? "": `startIcon="` + props.startIcon + `"`;
var setStartIcon = props.startIcon === "none" ? null: <span className="material-icons">  {props.startIcon} </span>;
// var setStartIcon = <span className="material-icons">  {props.startIcon} </span>;


// icon to the right
var setEndIconTitle = !props.endIcon ?"": `endIcon="` + props.endIcon + `"`;
var setEndIcon = props.endIcon === "none" ? null : <span className="material-icons"> {props.endIcon}</span> ;
// var setEndIcon = <span className="material-icons"> {props.endIcon}</span>;

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
<div>
<p> {"<Button"} {variantTitle} {disableshadowTitle} {disabledTitle} {setStartIconTitle} {setEndIconTitle} {sizeTitle} {colorTitle} {" />"} </p>
<button className={ disableshadowClass + " " + setSizeClass + " " + setColor  + " " + disabledClass + " " + variantClass}  onMouseOut={mouseOutHandler} onMouseOver={hoverHandler}  onBlur={blurHandler} onFocus={focusHandler} >
<p>{setStartIcon}{indicator}{setEndIcon}</p>
</button>



</div>
)
}


export default Button;