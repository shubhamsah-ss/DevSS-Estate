import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { LSData, title_name } from "./utils";
import { useEffect } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {

  const user = LSData.getItem("auth");

  const location = useLocation();
  const loc = location.pathname.split("/").pop() || (user? "home": "login");

  useEffect(() => {
    title_name(loc.toUpperCase());
  }, [location])


  return (
    <div>

      <Header />
      <Routes>
        <Route path="/" element={user? <Home /> : <Signin />} />
        <Route path="/home" element={<Navigate to={"/"} replace={true} />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
