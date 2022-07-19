import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import "./Login.style.css";

const Login = () => {
  const navigate = useNavigate();
  const [, setToken] = useContext(userContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://51.195.148.112/api/admin/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: values?.email,
        password: values?.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setToken(result.token);
    if (result?.success) {
      navigate("/product-type");
    }

  };

  return (
    <div className="gray-bg">
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>
            <h1 className="logo-name">IN+</h1>
          </div>
          <h3>Welcome to IN+</h3>
          <p>
            Perfectly designed and precisely prepared admin theme with over 50
            pages with extra new web app views.
          </p>
          <p>Login in. To see it in action.</p>
          <form className="m-t" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                required=""
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required=""
                onChange={handleChange}
                name="password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary block full-width m-b"
            >
              Login
            </button>

            <a href="#">
              <small>Forgot password?</small>
            </a>
            <p className="text-muted text-center">
              <small>Do not have an account?</small>
            </p>
            <a className="btn btn-sm btn-white btn-block" href="#">
              Create an account
            </a>
          </form>
          <p className="m-t">
            {" "}
            <small>
              Inspinia we app framework base on Bootstrap 3 &copy; 2014
            </small>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
