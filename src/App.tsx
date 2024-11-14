import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import LetsTalk from "./components/LetsTalk";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {

    return (
        <Router>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<AboutMe />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="letstalk" element={<LetsTalk />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
