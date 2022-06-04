import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => toggleAuth()}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
