import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Connect from "./connect.js";
import About from "./about.js";
import Home from "./home.js";
import RegulationsGuidelines from "./regulations_and_guidelines.js";
import ProjectAnalysis from "./project_analysis.js";
import RegulationsGuidelinesViewer from "./regulations_and_guidelines_viewer.js";
import Ethical_aiprojects from "./ethical_aiprojects.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/regulations_and_guidelines" element={<RegulationsGuidelines />} />  
          <Route path="/ethical_aiprojects" element={<Ethical_aiprojects />} />         
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project_analysis" element={<ProjectAnalysis />} />

          <Route path="/regulations_and_guidelines_viewer" element={<RegulationsGuidelinesViewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));