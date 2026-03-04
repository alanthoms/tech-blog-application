# Full Stack Application with Node, Express, Sequelize, and Authentication

## Challenge

In this challenge, you have a full stack application built with **Node.js**, **Express**, **Sequelize**, and **JWT authentication**. The code is structured into logical folders using modules.

Your challenge is to:

1. **Get the application running** following the installation steps.
2. **Test the application** to ensure it works as expected.
3. **Answer the following questions:**
   - What is happening in `models/index.js`?
   - In `models/user.js`, there are hooks at the bottom of the model definition. What do these do?
   - Where are all the routes for the API defined?
   - If you wanted to create a new route called `/api/students`, which file(s) would you need to update?
   - If you had additional data besides user data that you'd like to store in the JWT, how could you do that? Which file would you need to update?

## Key Learnings

- How a full stack application using **Node.js, Express, Sequelize, and JWT authentication** is structured.
- The complete **JWT authentication lifecycle**, including signing and route protection.
- How Sequelize models, hooks, and associations work.
- How to modify and extend a full stack application by adding new routes and modifying authentication.

## User Story

_As a developer, I want to understand how a full stack application is structured, how authentication is handled, and how I can extend the application by adding new routes and modifying JWT payloads._

## Acceptance Criteria

1. The application should run successfully after following the installation steps.
2. You should be able to test authentication and protected routes.
3. You should be able to explain the structure and purpose of key files such as `models/index.js`, `models/user.js`, and the route definitions.
4. You should be able to describe how to:
   - Add a new API route (`/api/students`).
   - Modify the JWT payload to include additional data.

## Getting Started

### Installation Steps

1. **Copy the `.env.example` file** and rename it to `.env`.
2. **Open MySQL in the terminal:**

```bash
mysql -u root -p
```

3. **Run the following command to set up the database:**

```bash
source db/schema.sql;
```

4. **Exit MySQL**

```bash
quit;
```

5. **Update the .env file and set DB_PASSWORD to your MySQL password.**
6. **Install dependencies**

```bash
npm install
```

7. **Seed the database with test data:**

```bash
npm run seed
```

8. **Run the application**

```bash
npm start
```

9. **Open the application in your browser:**

```browser
http://localhost:3001
```

## Resources

- [Express Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [jsonwebtoken (JWT) Package](https://www.npmjs.com/package/jsonwebtoken)

# Full Stack Tech Blog Application

## Challenge

This week, you've learned how to build a complete **back-end solution** with **CRUD operations** connected to a **MySQL database**. You've also explored how to interact with this backend using **API calls from a web page (front-end)**.

Now, it's time to put your skills into practice and build your first **backend application**!

### Your Task

You will develop a REST API for a **blogging platform** that allows users to:

- **Read** blog articles and filter them by categories.
- **Register** and log in to manage their content.
- **Create, update, and delete** their own blog posts.

For real-world examples, check out:

- [Medium](https://medium.com/)
- [TechCrunch](https://techcrunch.com/)

### Deployment

Once completed, you will **deploy your application** to [Render](https://render.com/). 🚀 Good luck!

## Key Learnings

- Developing **CRUD operations** in a full stack application.
- Running and testing a **Node.js/Express backend** with a **MySQL database** with Postman
- Deploying a **full stack database-driven application** to **Render**.

## User Story

_As a user, I want to register and log in to a blogging platform so that I can create, update, and delete my own blog posts. I also want to browse and filter blog posts by category._

## Acceptance Criteria

1. Users should be able to **register, log in, and log out** securely.
2. Users should be able to **create, update, and delete** their own blog posts.
3. Blog posts should be **filtered by category** for easy navigation.
4. The application should be **deployed** on [Render](https://render.com/) and accessible online.
5. The front-end should interact with the API to **dynamically display and update** blog content.
6. Instructions for running the application are included.
7. A demo video of the script running is submitted.

## Deploying to Render

1. Create an account on [Render](https://render.com/).
2. Set up a **web service** for your **backend**.
3. Use **Render's MySQL database hosting** or an external MySQL provider such as:
   - [PlanetScale](https://planetscale.com/)
   - [ClearDB (via Heroku)](https://elements.heroku.com/addons/cleardb)
4. Update your **database connection settings** in `.env` to match your MySQL provider.
5. Deploy your **front-end** (if separate) using **Render Static Sites** or another hosting service.

## Resources

- [Render Deployment Guide](https://render.com/docs/deploy-an-express-app)
- [Express Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

# Grading Rubric: Full Stack Tech Blog Application

> 🚫 **Use of Artificial Intelligence (AI) is strictly forbidden**

---

### 🚀 **Technical Functionality – 35%**

Evaluates whether the application fulfills the required features:

- [ ] Users can **register, log in, and log out** securely using session-based or token authentication.
- [ ] Users can **create, read, update, and delete (CRUD)** their own blog posts.
- [ ] Blog posts can be **filtered by category** .
- [ ] Blog content is **dynamically rendered** based on API responses.
- [ ] All major features are **fully functional** both locally and in production.

---

### 🧠 **Full-Stack Integration – 25%**

Assesses how well the frontend and backend are connected:

- [ ] API endpoints are implemented using **Node.js/Express** and follow RESTful standards.
- [ ] Responses from the backend are correctly **parsed and displayed** on the frontend.
- [ ] Backend uses **MySQL** (via Sequelize or direct queries) to persist blog data.
- [ ] App demonstrates understanding of a modular structure (separation of concerns)

---

### 🛠️ **Project Setup & Environment – 15%**

Assesses setup, environment handling, and deployability:

- [ ] Project includes a valid `package.json` with all required dependencies.
- [ ] Environment variables are used for sensitive data and configured in a `.env` file.
- [ ] App can be started locally using `npm start` and seeded using `npm run seed`.
- [ ] Project setup is well documented in the `README.md`.
- [ ] `.gitignore` file excludes sensitive files (e.g., `.env`, `node_modules`).

---

### 📄 **README & Documentation – 10%**

Evaluates the quality and completeness of documentation:

- [ ] `README.md` includes: project description, features, installation instructions, and usage guide.
- [ ] Clear instructions for both **local setup** and **Render deployment**.
- [ ] Contains live **deployment link** and link to the **GitHub repository**.
- [ ] Explanation of technologies used and file/folder structure (optional but encouraged).

---

### 🧹 **Code Quality & Maintainability – 10%**

Assesses clarity, cleanliness, and maintainability of the code:

- [ ] Code follows consistent naming conventions and formatting.
- [ ] Logic is **modular**, separating concerns (e.g., routes, models, controllers).
- [ ] Reusable components or helpers are created where needed.
- [ ] Comments are used meaningfully to explain non-obvious logic.
- [ ] No unused code, console logs, or redundant imports remain.

---

### 📌 **Version Control & Submission – 5%**

Evaluates use of Git and completeness of submission:

- [ ] GitHub repo includes frequent, descriptive commit messages.
- [ ] Final submission includes all necessary files to run the app.
- [ ] Commit history shows **incremental progress**, not one massive commit.
- [ ] Submission includes **Render URL** and **GitHub repo link** in README or classroom portal.

---

## ✅ Total: 100%
