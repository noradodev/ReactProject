import logo from "./logo.svg";
import NavBar from "./components/Navbar";
import HomePage from "./components/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <div className="bg-green-950">
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
