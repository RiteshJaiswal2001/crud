const express = require("express");
const {
  handleGetAllUsers,
  handleCreateNewUser,
  handleGetUserById,
  handleDeleteUser,
  handleUpdateUser,
} = require("../controllers/user");
const router = express.Router();

// router.get("/", handleGetAllUsers);
// router.post("/", handleCreateNewUser);

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

// router.get("/:id", handleGetUserById);
// router.patch("/:id", handleUpdateUser);
// router.delete("/:id", handleDeleteUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUser)
  .delete(handleDeleteUser);

module.exports = router;
