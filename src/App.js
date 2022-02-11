import React, { useState } from "react";
import Button from "./components/Button";
import Settings from "./components/Settings";

function App() {

const[variant, setVariant] = useState("");
const[isBoxShadow, setBoxShadow] = useState(true);
const[isDisabled, setDisabled] = useState(false);
const[iconSelect, setIconSelect] = useState("");
const[isleft, setIsLeft] = useState(true);
const[isRight, setIsRight] = useState(false);
const[sideSelect, setSideSelect] = useState("right")

function handleVariantChange(event){
  setVariant(event);
};

function handlerBoxShadowChange(event){
  setBoxShadow(event)
};


function handleDisableChange(event){
  setDisabled(event)
};

function handlerIconChange(event){
  setIconSelect(event);
}

function handlerSideChange(event){
setSideSelect(event)
}

  return (
    <div className="App">
    

    <h1>Button Component
    </h1>
    <Settings variantChange={ handleVariantChange } boxShadowChange={ handlerBoxShadowChange } disableChange={handleDisableChange} iconChange={handlerIconChange} sideChange={handlerSideChange} />

    <Button variant={variant} disableshadow={isBoxShadow} disabled={isDisabled} icon={iconSelect}  />


    <Button />
    <Button variant="outline"/>

    <Button variant="text"/>
    <Button disableshadow="true" />
    <Button disabled="true" />
    <Button startIcon="local_grocery_store" />
    <Button endIcon="local_grocery_store" />

    <Button startIcon="favorite_border" />
    <Button endIcon="favorite_border" />
  

    <Button startIcon="done_all" />
    <Button endIcon="done_all" />
  
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
