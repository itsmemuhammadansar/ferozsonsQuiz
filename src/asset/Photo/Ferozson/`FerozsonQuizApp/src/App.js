import React, { useState } from "react";
import "./App.css";
import OptionName from "./component/caseOptions";
import Home from "./component/quiz/Home";
import Scenario from "./component/quiz/scenario";
import { Route, Routes } from "react-router-dom";
import ScenarioTwo from "./component/quiz/scenarioTwo";
import ScenarioThree from "./component/quiz/scenarioThree";
import ScenarioFour from "./component/quiz/scenarioFour";
import ScenarioFive from "./component/quiz/scenarioFive";
import ScenarioSix from "./component/quiz/scenarioSix";
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
        <Route path="/scenarioOne" element={<Scenario />} />
        <Route path="/scenarioTwo" element={<ScenarioTwo />} />
        <Route path="/scenarioThree" element={<ScenarioThree />} />
        <Route path="/scenarioFour" element={<ScenarioFour />} />
        <Route path="/scenarioFive" element={<ScenarioFive />} />
        <Route path="/scenarioSix" element={<ScenarioSix />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
