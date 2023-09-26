import React, { useState } from "react";
import "./App.css";
import OptionName from "./component/caseOptions";
import Home from "./component/quiz/Home";
import Scenario from "./component/quiz/scenario";
import { Route, Routes } from "react-router-dom";
import ScenarioTow from "./component/quiz/scenarioTwo";
import PageNotFound from "./component/quiz/pageNotFound";

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
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Scenario1" element={<Scenario />} />
        <Route path="/ScenarioTow" element={<ScenarioTow />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}
export default App;
