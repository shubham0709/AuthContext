import './App.css';
import Navbar from "./components/Navbar";
import LoginStatus from "./components/LoginStatus";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginStatus />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      Main page
    </div>
  );
}

export default App;
