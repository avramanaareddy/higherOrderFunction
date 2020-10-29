import React from "react";
import "./styles.css";
import { hof } from "./hof";
import hof2 from "./hof";
export default function App() {
  return (
    <div className="App">
      Sample::{10 * 2}
      Higher Order Function with arrow:: {hof(10)(30)}
      <hr />
      <h3>Hiher order regular function:: {hof2(10)(20)}</h3>
    </div>
  );
}
