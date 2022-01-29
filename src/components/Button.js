import React from "react";





function Button (props){


const variantTitle = props.variant ? `variant ="` + props.variant + `"`: null ;
const variantClass = props.variant ? "Btn"  + props.variant : null ;

const disableshadowTitle = props.disableshadow? "disableShadow": null;
const disableshadowClass = props.disableshadow? "disableShadow": null;


return (
<div className="cards">
<div className="buttonCard">
<p> {"<Button"} {variantTitle}{disableshadowTitle}  {" />"} </p>
<button className={variantClass + " " + disableshadowClass}>
<p>Default</p>
</button>

</div>


</div>
)
}


export default Button;