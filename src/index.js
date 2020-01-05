import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import { ThemeService } from "services/theme";
import { Ecosystem } from "ui/eco";
import store from "data";

window.store = store;

ReactDOM.render(
  <Router>
    <ReduxProvider store={store}>
      <ThemeService>
        <Ecosystem />
      </ThemeService>
    </ReduxProvider>
  </Router>,
  document.getElementById("root")
);
