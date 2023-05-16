import express, { NextFunction, Request, Response } from "express";
import logic from "../logic/userLogic";
import User from "../model/user";

const router = express.Router();

const users = [
  { id: 1, email: 'john@example.com', password: 'password123' },
  { id: 2, email: 'jane@example.com', password: 'password456' },
];

// GET
// All Vacations
router.get(
  "/api/users",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const users = await logic.getAllUsers();
      response.json(users);
    } catch (err: any) {
      next(err);
    }
  }
);

// One user
router.get(
  "/api/user/:userId",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const userId = +request.params['userId'];
      const user = await logic.getOneUser(userId);
      response.json(user);
    } catch (err: any) {
      next(err);
    }
  }
);

// POST
router.post(
  "/api/addUser",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      let user = new User(request.body);
      const newUser = await logic.addUser(user);
      response.status(201).json(newUser);
    } catch (error: any) {
      next(error);
    }
  }
);

router.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Find user with matching email
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check password
  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // Authentication successful
  res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
});

// Update profile endpoint
router.put('/api/profile', (req, res) => {
  // Handle profile update logic here
  // Extract necessary data from the request body
  const { name, email } = req.body;

  // Perform validation, database operations, etc.

  // Return a response
  res.json({ message: 'Profile updated successfully' });
});

export default router;