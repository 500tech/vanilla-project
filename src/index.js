import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import { TodosService } from "services/todos";
import { ThemeService } from "services/theme";
import { Ecosystem } from "ui/eco";

ReactDOM.render(
  <Router>
    <TodosService>
      <ThemeService>
        <Ecosystem />
      </ThemeService>
    </TodosService>
  </Router>,
  document.getElementById("root")
);
