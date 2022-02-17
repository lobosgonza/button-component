import React, { useState } from "react";
import Button from "./components/Button";
import Settings from "./components/Settings";

function App() {
  const [variant, setVariant] = useState("");
  const [isBoxShadow, setBoxShadow] = useState(true);
  const [isDisabled, setDisabled] = useState(false);
  const [iconActive, setIconActive] = useState(true);
  const [iconSide, setIconSide] = useState({
    leftSide: false,
    rightSide: false,
  });
  const [iconType, setIconType] = useState("local_grocery_store");

  function handleVariantChange(event) {
    setVariant(event);
  }

  function handlerBoxShadowChange(event) {
    setBoxShadow(event);
  }

  function handleDisableChange(event) {
    setDisabled(event);
  }
  function IconActiveChange(event) {
    setIconActive(event);
  }

  function handlerIconTypeChange(event) {
    setIconType(event);

    //TRYING TO SYNC THE SIDE BETWEEN THE ICON SLECTED
    // if (iconSide.rightSide === false && iconSide.leftSide === false){
    //   setIconSide({ leftSide: false, rightSide: false });
    // }
    // else if (iconSide.rightSide === false) {
    //   setIconSide({ leftSide: iconType, rightSide: false });
    // } else if (iconSide.leftSide === false) {
    //   setIconSide({ leftSide: false, rightSide: iconType });
    // }


    setIconSide({ leftSide: iconType, rightSide: false });
  }

  function handlerSideChange(event) {
    if (event === "left") {
      setIconSide({ leftSide: iconType, rightSide: false });
    } else if (event === "right") {
      setIconSide({ leftSide: false, rightSide: iconType });
    } else {
      setIconSide({ leftSide: false, rightSide: false });
    }
  }

  return (
    <div className="App">
      <h1>Button Component</h1>
      <Settings
        variantChange={handleVariantChange}
        boxShadowChange={handlerBoxShadowChange}
        disableChange={handleDisableChange}
        iconChange={handlerIconTypeChange}
        sideChange={handlerSideChange}
      />

      <Button
        variant={variant}
        startIcon={iconSide.leftSide}
        endIcon={iconSide.rightSide}
        disableshadow={isBoxShadow}
        disabled={isDisabled}
      />

      <Button />
      <Button variant="outline" />

      <Button variant="text" />
      <Button disableshadow="true" />
      <Button disabled="true" />
      <Button startIcon="local_grocery_store" />
      <Button endIcon="local_grocery_store" />

      <Button startIcon="favorite_border" />
      <Button endIcon="favorite_border" />

      <Button startIcon="done_all" />
      <Button endIcon="done_all" />

      <Button startIcon="check_circle" />
      <Button endIcon="check_circle" />

      <Button size="sm" />
      <Button size="md" />
      <Button size="lg " />

      <Button color="default" />
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
    </div>
  );
}

export default App;
