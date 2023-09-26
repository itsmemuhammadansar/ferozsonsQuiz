import React, { useState } from "react";
import "./App.css";
import OptionName from "./component/caseOptions";
import Home from "./component/quiz/Home";
import Scenario from "./component/quiz/scenario";
import { Route, Routes } from "react-router-dom";
import ScenarioTow from "./component/quiz/scenarioTwo";

function App() {
  const [option, setOption] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/option"
          element={<OptionName option={option} setOption={setOption} />}
        />
        <Route path="/Scenario1" element={<Scenario />} />
        <Route path="/ScenarioTow" element={<ScenarioTow />} />
      </Routes>
    </div>
  );
}
export default App;
