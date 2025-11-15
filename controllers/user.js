const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const result = await User.find({});
  //   console.log(result);

  return res.status(201).json({ msg: "success", result: result });
}
async function handleCreateNewUser(req, res) {
  const body = req.body;
  console.log(body);

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
  });
  //   console.log(result);

  return res.status(201).json({ msg: "success", id: result._id });
}
async function handleGetUserById(req, res) {
  const id = req.params.id;
  const result = await User.findById(id);
  return res.status(201).json({ msg: "success", result: result });
}
async function handleUpdateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      jobTitle: "queen of North",
    });

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ msg: "Success", user: updatedUser });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
}

async function handleDeleteUser(req, res) {
  const id = req.params.id;
  const result = await User.findByIdAndDelete(id);
  return res.status(201).json({ msg: "success", result: result });
}
module.exports = {
  handleGetAllUsers,
  handleCreateNewUser,
  handleGetUserById,
  handleUpdateUser,
  handleDeleteUser,
};
