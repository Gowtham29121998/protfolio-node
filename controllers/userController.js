import User from "../modules/userModule.js";


export async function signup(req, res, next) {
  try {
    const data = req.body;
    const user = await User.create({ ...data, token: '' });
    if (user) {
      res.status(200).json({
        status: "Created",
        user,
      });
    } else {
      res.status(400).json({
        status: "Bad Request",
        message: "Invalid Credential",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
}

export async function login(req, res, next) {
  try {
    const data = req.body;
    const user = await User.findOne({ email: data.email, password: data.password });
    if (user) {
      res.status(200).json({
        status: "success",
        user,
      });
    } else {
      res.status(400).json({
        status: "Bad Request",
        message: "Invalid Credential",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
}