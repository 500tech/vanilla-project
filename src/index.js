import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import { TodosService } from "services/todos";
import { ThemeService } from "services/theme";
import { App } from "ui/App";

ReactDOM.render(
  <Router>
    <TodosService>
      <ThemeService>
        <App />
      </ThemeService>
    </TodosService>
  </Router>,
  document.getElementById("root")
);
