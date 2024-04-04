import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}
