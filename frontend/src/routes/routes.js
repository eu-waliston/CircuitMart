import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Components/login/Login";
import Register from "../Components/register/Register";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;