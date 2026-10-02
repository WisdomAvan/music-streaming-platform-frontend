import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import OnBoardingPage from "./components/OnBoardingPage";
import Login from "./pages/Login";
import AuthGuard from "./routes/AuthGuard";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public routes — anyone can reach these, logged in or not */}
      <Route path="/" element={<OnBoardingPage onGetStarted={() => {}} />} />
      <Route path="/login" element={<Login />} />

      
      <Route element={<AuthGuard />}>
        <Route path="/home" element={<Home/>}/>
      </Route>

      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;