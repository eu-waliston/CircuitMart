import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import AllRoutas from "./routes/routes";

const App = () => {
  return (
    <div className="app--component">
      <Navbar />
      <AllRoutas />
      <Footer />
    </div>
  );
};

export default App;
