import logincss from "./login.module.css";
import music from "../../assets/music.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // console.log(data);
  console.log(BASE_URL);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type ": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res2) => console.log(res2))
      .catch((error) => console.log(error));
  };
  return (
    <div className={logincss.container}>
      <div className={logincss.musicCart}>
        <img src={music} alt="" />
        <h1>Musicart</h1>
      </div>
      <div className={logincss.inputForm}>
        <h1>Sign in</h1>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <label>Enter your email or mobile number</label>
          <br />
          <input type="text" name="email" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" name="password" />
          <br />
          <button>Continue</button>
        </form>
        <p>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>
      <div className={logincss.buttomContainer}>
        <div></div>
        <p>New to Musicart?</p>
        <div></div>
      </div>

      <button onClick={() => navigate("/signup")} className={logincss.btn}>
        Create your Musicart account
      </button>
      <div className={logincss.lastContainer}>
        Musicart | All rights reserved
      </div>
    </div>
  );
};
export default Login;
