import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
import Diet from "./components/Diet";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
