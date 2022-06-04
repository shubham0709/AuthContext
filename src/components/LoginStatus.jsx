import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LoginStatus = () => {
  const { isAuth, token } = useContext(AuthContext);
  console.log(isAuth, "from login status");
  return (
    <div>
      <div>LoginStatus : {isAuth ? "Logged in" : "Logged out"}</div>
      {isAuth ? <div>Token : {token}</div> : <div></div>}
    </div>
  );
};

export default LoginStatus;
