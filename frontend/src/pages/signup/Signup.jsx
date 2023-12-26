import signupcss from "../signup/signup.module.css";
import music from "../../assets/music.png";
const Signup = () => {
  return (
    <div className={signupcss.container}>
      <div className={signupcss.musicContainer}>
        <img src={music} alt="" />
        <h1>Musicart</h1>
      </div>
      <div className={signupcss.inputContainer}>
        <h1>Create Account</h1>
        <label>Your name</label>
        <input type="text" />
        <br />
        <label>Mobile number</label>
        <input type="text" />
        <br />
        <label>Email Id</label>
        <input type="email" />
        <br />
        <label>Password</label>
        <input type="password" />
        <br />
        <p>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Musicart.
          Message and data rates may apply.
        </p>
        <button>Continue</button>
        <p>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>
    </div>
  );
};
export default Signup;
