import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { Score } from "./components/Counter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <h2>Quiz Game</h2>
    <Score teamName="A" counterName="Score" />
    <Score teamName="B" counterName="Score" />

    <h2>Football</h2>
    <Score teamName="Liverpool" counterName="Goals" />
    <Score teamName="Chelsea" counterName="Goals" />
  </React.StrictMode>
);
