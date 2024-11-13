import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
    return (
        <Router>
            <NavBar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="about" element={ <AboutMe/> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
