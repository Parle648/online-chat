import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
