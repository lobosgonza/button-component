import React from "react";



function Settings(props){

function variantHandler(event){
console.log(event.target.name);
props.variantChange(event.target.name);
};

function boxShadowHandler(event){
console.log(event.target.name);
props.boxShadowChange(event.target.name);
};

    return (<>
<h2>Variant</h2>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={variantHandler} name="outline">Outline </button>
  <button type="button" className="btn btn-primary" onClick={variantHandler} name="text">Text</button>
  <button type="button" className="btn btn-primary" onClick={variantHandler} name=" ">None</button>
</div>


<h2>Disable Box Shadow</h2>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={boxShadowHandler} name="disableShadow">Disable </button>
  <button type="button" className="btn btn-primary" onClick={boxShadowHandler} name=" ">Enable</button>
</div>
    </>
    )


}


export default Settings;


