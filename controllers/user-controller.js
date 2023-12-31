const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/user");

const registerUser = async (req, res) => {
  const { firstName, lastName, phone, address, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json("Please enter all fields.");
  }
  try {
    //check if user exists
    const userExists = await user.findOne({ email });

    if (userExists) {
      return res.status(400).json("User already exists!");
    }

    const hashedPassword = bcrypt.hashSync(password);

    const newUser = new user({
      firstName,
      lastName,
      phone,
      address,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    const token = jwt.sign(
      { email: savedUser.email, id: savedUser._id },
      process.env.JWT_KEY,
      { expiresIn: "30d" }
    );
    res.status(201).json({ savedUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send(`"Failed registration" ${error}`);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Please enter all fields");
  }

  const findUser = await user.findOne({ email });

  if (!findUser) {
    return res.status(400).send("Invalid email");
  }

  const isPasswordValid = await bcrypt.compare(password, findUser.password);

  if (!isPasswordValid) {
    return res.status(400).send("Invalid password");
  }

  const token = jwt.sign(
    { id: findUser._id, email: findUser.email },
    process.env.JWT_KEY,
    { expiresIn: "30d" }
  );
  res.status(200).json({ findUser, token });
};

const getUser = async (req, res) => {
  res.json(req.user);
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
