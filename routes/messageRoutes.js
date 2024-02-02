const express = require("express");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");

const { protect } = require("../middleware");

const router = express.Router();

router.route("http://localhost:5000").post(protect, sendMessage);
router.route("http://localhost:5000/:chatId").get(protect, allMessages); // Fetch all messages for a single chat

module.exports = router;
