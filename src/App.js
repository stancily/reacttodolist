import React, {Component} from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import Todolist
 from "./components/Todolist";
function App() {
  return (
    <div className="container">
    <div className="row">
      <TodoInput/>
      <Todolist/> 
    </div>
    </div>
  );
}

export default App;
