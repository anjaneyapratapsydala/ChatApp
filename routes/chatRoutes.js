const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers");
const { protect } = require("../middleware");

const router = express.Router();

// Only logged in user can access the below routes
router.route("http://localhost:5000").post(protect, accessChat).get(protect, fetchChats); // Both requests work on same route
router.route("http://localhost:5000/group").post(protect, createGroupChat); // Create group chat
router.route("http://localhost:5000/rename").put(protect, renameGroup); // Rename group chat
router.route("http://localhost:5000/groupadd").put(protect, addToGroup); // Add someone to the group
router.route("http://localhost:5000/groupremove").put(protect, removeFromGroup); // Remove someone or leave the group

module.exports = router;
