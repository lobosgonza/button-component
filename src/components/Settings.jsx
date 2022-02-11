import React from "react";



function Settings(props){

function variantHandler(event){
console.log(event.target.name);
props.variantChange(event.target.name);
};

function boxShadowHandler(event){
console.log(event.target.value);
props.boxShadowChange(event.target.value);
};


function disableHandler(event){
console.log(event.target.value);
props.disableChange(event.target.value);
};

function iconHandler(event){
console.log(event.target.value);
props.iconChange(event.target.value);
};


function sideHandler(event){
console.log(event.target.value);
props.sideChange(event.target.value);
};

    return (<>
<h2>Variant</h2>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={variantHandler} name="outline">Outline </button>
  <button type="button" className="btn btn-primary" onClick={variantHandler} name="text">Text</button>
  <button type="button" className="btn btn-primary" onClick={variantHandler} name=" ">None</button>
</div>


<h2>Box Shadow</h2>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={boxShadowHandler} value={true}  >on</button>
  <button type="button" className="btn btn-primary" onClick={boxShadowHandler} value={false} >off </button>
</div>


<h2>Disable</h2>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={disableHandler} value={true}>on </button>
  <button type="button" className="btn btn-primary" onClick={disableHandler} value={false}>off</button>
</div>

<h2>Icon</h2>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={iconHandler} value="" > None</button>
  <button type="button" className="btn btn-primary" onClick={iconHandler} value="local_grocery_store"><span className="material-icons">local_grocery_store</span></button>
  <button type="button" className="btn btn-primary" onClick={iconHandler} value="favorite_border"><span className="material-icons">favorite_border</span> </button>
  <button type="button" className="btn btn-primary" onClick={iconHandler} value="done_all"><span className="material-icons">done_all</span></button>
  <button type="button" className="btn btn-primary" onClick={iconHandler} value="check_circle" ><span className="material-icons">check_circle</span></button>
</div>

<h2>Side</h2>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={sideHandler} value="none" > None</button>
  <button type="button" className="btn btn-primary" onClick={sideHandler} value="left">Left</button>
  <button type="button" className="btn btn-primary" onClick={sideHandler} value="right">Right </button>
</div>

    </>
    )


}


export default Settings;


