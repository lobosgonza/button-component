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
    </div>
    
 
  );
}

export default App;
