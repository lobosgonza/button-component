import React, { useState } from "react";
import Button from "./components/Button";
import Settings from "./components/Settings";
import Navigator from "./components/Navigator";

function App() {
  const [variant, setVariant] = useState("");
  function handleVariantChange(event) {
    setVariant(event);
  }
  
  
  const [isBoxShadow, setBoxShadow] = useState(true);
  function handlerBoxShadowChange(event) {
    setBoxShadow(event);
  }
  
  
  
  // ICON SETTINGS
  
  const [iconActive, setIconActive] = useState(true);
  const [iconType, setIconType] = useState("local_grocery_store");
  const [iconSide, setIconSide] = useState({
    leftSide: false,
    rightSide: false,
  });
  
  // Desactiva botón
  const [isDisabled, setDisabled] = useState(false);
    function handleDisableChange(event) {
      setDisabled(event);
      setIconSide(
        event === false
          ? { leftSide: false, rightSide: false }
          : { leftSide: iconSide.leftSide, rightSide: iconSide.rightSide }
      );
    }
    // Select icon
    function handlerIconTypeChange(event) {
      console.log("handlerIconTypeChange activated: iconSide.rightSide:" + iconSide.rightSide + " | iconSide.leftSide:" + iconSide.leftSide);
      setIconType(event);
      // SYNC THE SIDE BETWEEN THE ICON SLECTED
      if (iconSide.rightSide === false && iconSide.leftSide === false) {
        setIconSide({ leftSide: event, rightSide: false});
      } else if (iconSide.rightSide === false) {
        setIconSide({ leftSide: event, rightSide: false });
      } else if (iconSide.leftSide === false) {
        setIconSide({ leftSide: false, rightSide: event });
      }
    };
  
      function handlerSideChange(event) {
        console.log("handleSideChange activated");
        if (event === "left") {
          setIconSide({ leftSide: iconType, rightSide: false });
        } else if (event === "right") {
          setIconSide({ leftSide: false, rightSide: iconType });
        } else {
          setIconSide({ leftSide: false, rightSide: false });
        }
      };
    

  
  const [btnSize, setBtnSize] = useState("md");
  function handlerSizeChange(event) {
    setBtnSize(event);
  }
  
  const [btnColor, setBtnColor] = useState("default"); 
    function handlerBtnColorChange(event) {
      setBtnColor(event);
    }





  return (<>
    <Navigator/>
    <div className="container">
       <div className="row align-items-start">
 

        <div className="col-4">
          <Settings
            variantChange={handleVariantChange}
            boxShadowChange={handlerBoxShadowChange}
            disableChange={handleDisableChange}
            iconChange={isDisabled === true ? null : handlerIconTypeChange}
            sideChange={handlerSideChange}
            sizeChange={handlerSizeChange}
            btnColorChange={handlerBtnColorChange}
          />
        </div>

        <div className="col-8 align-self-center text-center">
          <Button
            variant={variant}
            startIcon={iconSide.leftSide}
            endIcon={iconSide.rightSide}
            disableshadow={isBoxShadow}
            disabled={isDisabled}
            size={btnSize}
            color={btnColor}
          />
        </div>

      </div>
    </div>
  </>
  );
}

export default App;
