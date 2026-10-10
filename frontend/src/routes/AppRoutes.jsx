import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "../features/auth/SignupPage";
import Login from "../features/auth/LoginPage";
import HomePage from "../features/dashboard/HomePage"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  );
}
