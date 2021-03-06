import React from "react";




function Settings(props) {

  // get the screen width
  let width = window.screen.width;

  function variantHandler(event) {
    console.log("Variant " + event.target.name);
    props.variantChange(event.target.name);
  }

  function boxShadowHandler(event) {
    console.log("Boxshadow " + event.target.value);
    props.boxShadowChange(event.target.value);
  }

  function disableHandler(event) {
    console.log("Disable " + event.target.value);
    props.disableChange(event.target.value);
  }

  function iconHandler(event) {
    console.log("Icon Value: " + event.target.value);
    props.iconChange(event.target.value);
  }

  function sideHandler(event) {
    console.log("Icon side " + event.target.value);
    props.sideChange(event.target.value);
  }

  function sizeHandler(event) {
    console.log("button size " + event.target.value);
    props.sizeChange(event.target.value);
  }

  function colorHandler(event) {
    console.log("button color " + event.target.value);
    props.btnColorChange(event.target.value);
  }

  return (
    <div>
      <h2>Settings</h2>


      
      <h3>Variant</h3>
      <div className={ window.screen.width <= 350 ? "btn-group" : "btn-group" } role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={variantHandler}
          name="outline"
        >
          Outline
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={variantHandler}
          name="text"
        >
          Text
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={variantHandler}
          name="default"
        >
          None
        </button>
      </div>

      <h3>Box Shadow</h3>
      <div className={ window.screen.width <= 350 ? "btn-group" : "btn-group" } role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={boxShadowHandler}
          value={true}
        >
          on
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={boxShadowHandler}
          value={false}
        >
          off{" "}
        </button>
      </div>

      <h3>Disable Button</h3>
      <div className={ window.screen.width <= 350 ? "btn-group" : "btn-group" } role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={disableHandler}
          value={true}
        >
          Able
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={disableHandler}
          value={false}
        >
          Disabled
        </button>
      </div>

      <h3>Icon</h3>
      <div className={ window.screen.width <= 350 ? "btn-group-vertical" : "btn-group" } role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={iconHandler}
          value="none"
        >
          {" "}
          None
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={iconHandler}
          value="local_grocery_store"
        >
          {" "}
          <span className="material-icons">local_grocery_store</span>{" "}
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={iconHandler}
          value="favorite_border"
        >
          {" "}
          <span className="material-icons">favorite_border</span>{" "}
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={iconHandler}
          value="done_all"
        >
          {" "}
          <span className="material-icons">done_all</span>
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={iconHandler}
          value="check_circle"
        >
      
          <span className="material-icons">check_circle</span>
        </button>
      </div>

      <h3>Side</h3>
      <div className={ window.screen.width <= 350 ? "btn-group" : "btn-group" } role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={sideHandler}
          value="none"
        >
          {" "}
          None
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={sideHandler}
          value="left"
        >
          Left
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={sideHandler}
          value="right"
        >
          Right
        </button>
      </div>

      <h3>Size</h3>
      <div className={ window.screen.width <= 207 ? "btn-group-vertical" : "btn-group" } role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={sizeHandler}
          value="sm"
        >
          Small
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={sizeHandler}
          value="md"
        >
          Medium
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={sizeHandler}
          value="lg"
        >
          Large
        </button>
      </div>

      <h3>Color</h3>
      <div className={ window.screen.width <= 350 ? "btn-group-vertical" : "btn-group" } role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={colorHandler}
          value="default"
        >
          Default
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={colorHandler}
          value="primary"
        >
          Primary
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={colorHandler}
          value="secondary"
        >
          Secondary
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={colorHandler}
          value="danger"
        >
          Danger
        </button>
      </div>
  
    </div>
  );
}

export default Settings;
