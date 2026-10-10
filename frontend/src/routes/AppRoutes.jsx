import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "../features/auth/SignupPage";
import Login from "../features/auth/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  );
}
