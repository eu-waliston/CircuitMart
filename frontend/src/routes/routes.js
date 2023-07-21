import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Components/login/Login";
import Register from "../Components/register/Register";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;