/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

import "./Login.scss";
import { toast } from "react-toastify";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth, loading } = useAuth();

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      console.log("campos obligatorios");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://api-starwraithgg.herokuapp.com/api/users/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/dashboard");
    } catch (error) {
      const { data } = error.response;
      toast.error(data.msg);
    }
  };

  return (
    <div className="center-center">
      <form autoComplete="off" onSubmit={handleSubmit} className="form">
        <div className="control">
          <h1>Login</h1>
        </div>
        <div className="control block-cube block-input">
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <button className="btn block-cube block-cube-hover" type="submit">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Log In</div>
        </button>
      </form>
    </div>
  );
}
