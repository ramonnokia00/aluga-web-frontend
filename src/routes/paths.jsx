import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Imoveis from "../pages/Imoveis";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/imoveis" element={<Imoveis />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
