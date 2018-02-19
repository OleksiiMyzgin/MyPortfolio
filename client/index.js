import React from "react";
import { render } from "react-dom";

// Import CSS
import css from "./styles/_style.styl";
import App from "./components/App";

class Root extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

render(<Root />, document.getElementById("root"));
