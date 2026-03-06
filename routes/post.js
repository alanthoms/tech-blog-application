// create a new router
const app = require("express").Router();

// import the models
const { Post, Category } = require("../models/index");

const { authMiddleware } = require("../utils/auth");

// Route to add a new post
app.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content, postedBy, category_id } = req.body;
    const post = await Post.create({ title, content, postedBy, category_id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error adding post" });
  }
});

// Route to get all posts
app.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    let posts;
    if (category) {
      posts = await Post.findAll({
        where: { category_id: category },
        include: {
          model: Category,
          as: "category",
          attributes: ["category_name"],
        },
      });
    } else {
      posts = await Post.findAll({
        include: {
          model: Category,
          as: "category",
          attributes: ["category_name"],
        },
      });
    }

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving posts", error });
  }
});

app.get("/:id", authMiddleware, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving post" });
  }
});

// Route to update a post
app.put("/:id", async (req, res) => {
  try {
    const { title, content, postedBy, category_id } = req.body;
    const post = await Post.update(
      { title, content, postedBy, category_id },
      { where: { id: req.params.id } },
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
});

// Route to delete a post
app.delete("/:id", async (req, res) => {
  try {
    const post = await Post.destroy({ where: { id: req.params.id } });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

// export the router
module.exports = app;
