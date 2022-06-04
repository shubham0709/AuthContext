import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [data, setData] = useState({});
  const { setToken, setIsAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        setToken(res.data.token);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log("axios error occured", err);
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="enter your email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
