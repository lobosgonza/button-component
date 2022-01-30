import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
    

    <h1>Button Component
    </h1>
    <Button />
    <Button variant="outline"/>
    <Button variant="text"/>
    <Button disableshadow />
    <Button disabled />
    <Button startIcon="local_grocery_store" />
    <Button endIcon="local_grocery_store" />
    <Button endIcon="local_grocery_store variant bernie" />
    </div>
    
 
  );
}

export default App;
