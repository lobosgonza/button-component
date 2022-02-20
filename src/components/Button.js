import React, { useState } from "react";

function Button(props) {
  // Variant Button Config
  const variantTitle = props.variant
    ? `variant ="` + props.variant + `"`
    : null;
  const variantClass = props.variant ? props.variant : null;

  //// DISABLE BUTTON CONFIG

  //   Disable Shadow Title
  var disableShadowFunction = props.disableshadow === "false" ? "disableShadow " : "";
  var disableshadowTitle =disableShadowFunction;
  var disableshadowClass =disableShadowFunction;

  // Disable Button
  var disabledFunction = props.disabled === "true" ? "disabled " : "";
  var disabledTitle = disabledFunction;
  var disabledClass = disabledFunction;

  //// GOOGLE ICONS CONFIG

  // icon to the left
  var setStartIconTitle = !props.startIcon
    ? ""
    : `startIcon="` + props.startIcon + `"`;
  var setStartIcon =
    props.startIcon === "none" ? null : (
      <span className="material-icons"> {props.startIcon} </span>
    );

  // icon to the right
  var setEndIconTitle = !props.endIcon ? "" : `endIcon="` + props.endIcon + `"`;
  var setEndIcon =
    props.endIcon === "none" ? null : (
      <span className="material-icons"> {props.endIcon}</span>
    );

  //Size
  const sizeTitle = props.size ? `size ="` + props.size + `"` : "";
  var setSizeClass = props.size ? props.size + " " : "";

  // Colors
  const colorTitle = props.color ? `color ="` + props.color + `"` : "";
  var setColorClass = props.color ? props.color + " " : "";

  //Mouse Event States
  const [indicator, setIndicator] = useState("Default");

  const [isFocused, switchFocused] = useState(false);

  const [isOvered, switchIsOvered] = useState(false);

var isDisabled = props.disabled;
// var isDisabled = false;

  // Focus
  function focusHandler() {
    console.log("Is Focused");
    switchFocused(true);
    props.disabled === true? setIndicator("Default") : setIndicator("Focused");
  }

  //Blur
  function blurHandler() {
    switchFocused(false);
    setIndicator("Default");
  }

  // Mouse out
  function mouseOutHandler() {
    switchIsOvered(false);
    console.log("mouse out");
    props.disabled === true ? setIndicator("Default") : setIndicator(isFocused  ? "Focused" : "Default") ;
  }

  // Mouse over
  function mouseOverhandler() {
    console.log("Mouse overed");
    switchIsOvered(true);
    isDisabled === true ? setIndicator("Default") : setIndicator("Hovered");
  }

  return (
    <div>
      <p>
        {"<Button"} {variantTitle} {disableshadowTitle} {disabledTitle}
        {setStartIconTitle} {setEndIconTitle} {sizeTitle} {colorTitle} {" />"}
      </p>
      <button
        className={
          disableshadowClass +
          setSizeClass +
          setColorClass +
          disabledClass +
          variantClass
        }
        onMouseOut={mouseOutHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        onMouseOver={mouseOverhandler}
      >
        <p>
          {setStartIcon}
          {indicator}
          {setEndIcon}
        </p>
      </button>
    </div>
  );
}

export default Button;
