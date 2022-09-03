import React from "react";
import Login from "./Backend/Login";
import Register from "./Backend/Register";
import { useGContext } from "./Components/Context";

import Navbar from "./Components/Navbar";
import Notelist from "./Components/Notelist";

const App = () => {
  const { style } = useGContext();

  return (
    <div className="app" style={style}>
      <Navbar />

      <div className="container">
        {/* <Search /> */}
        <Notelist />
        {/* <Register /> */}
      </div>
    </div>
  );
};

export default App;
