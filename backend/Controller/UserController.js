const User = require("../Model/User");

//Post: http://localhost:4000/prep/userdetails
const userDetails = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json({ newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get: http://localhost:4000/prep/userdisplay
const userDisplay = async (req, res) => {
  try {
    const getUser = await User.find();

    if (!getUser) {
      return res.status(404).json({ message: "Page Error" });
    }
    return res.status(200).json({ getUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//Update: http://localhost:4000/prep/userupdate/:id
const userUpdate = async (req, res) => {
  const { fname, lname, email } = req.body;
  const id = req.params.id;

  try {
    if (!fname || !lname || !email) {
      return res.status(404).json({ message: "Missing Required Fields" });
    }

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        fname,
        lname,
        email,
      },
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).json({ updateUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//Delete: http://localhost:4000/prep/userdelete/:id
const userDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({ deleteUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  userDetails,
  userDisplay,
  userUpdate,
  userDelete,
};
