import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Components/login/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;