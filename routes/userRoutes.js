const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers");
const { protect } = require("../middleware");

const router = express.Router();

router.route("/http://localhost:5000").post(registerUser).get(protect, allUsers); // Both request supported on the same route
router.post("/http://localhost:5000/login", authUser);

module.exports = router;
