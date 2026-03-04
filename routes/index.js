const router = require("express").Router();

const postRoutes = require("./post");
const categoryRoutes = require("./category");
const userRoutes = require("./user");
const { authMiddleware } = require("../utils/auth");

// create a default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

//add authentication for all category and posts related routes
router.use("/api/categories", authMiddleware, categoryRoutes);
router.use("/api/posts", authMiddleware, postRoutes);
router.use("/api/users", userRoutes);

module.exports = router;
