import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import { TodosService } from "services/todos";
import { App } from "ui/App";

ReactDOM.render(
  <Router>
    <TodosService>
      <App />
    </TodosService>
  </Router>,
  document.getElementById("root")
);
