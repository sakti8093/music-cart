const { userModel } = require("../models/usermodel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    console.log(email, password);
    if (!email || !password) {
      return res.status(422).send({
        success: false,
        message: "please provide email and password",
      });
    }
    console.log(email);
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user?.email) {
      return res.status(401).send({
        success: false,
        message: "user not exists",
      });
    }
    console.log(user, "user");
    const isPasswordCorrect = await bcrypt.compare(password, user?.password);
    const token = await jwt.sign(user.toJSON(), process.env.SECRET);
    if (isPasswordCorrect) {
      return res.status(200).send({
        success: true,
        token: token,
        data: {
          username: user.email,
        },
      });
    } else {
      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error?.message || "internal server error",
    });
  }
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).send({
        success: false,
        message: "please provide email and password",
      });
    }

    const user = await userModel.findOne({ email });
    const encryptedPassword = await bcrypt.hash(password, 10);

    if (user?.email) {
      return res.status(409).send({
        success: false,
        message: "email already exists",
      });
    }

    await userModel.create({ email, password: encryptedPassword });

    return res.json({
      success: true,
      message: "email successfully registered",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error?.message || "internal server error",
    });
  }
};

module.exports = {
  login,
  signup,
};
