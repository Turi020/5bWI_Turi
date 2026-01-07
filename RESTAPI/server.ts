// RESTAPI/server.ts

import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { randomUUID } from "crypto";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cookieParser());
app.use(express.json());

// Mock data
let people = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 22 },
];

// Root route
app.get("/", (req: Request, res: Response) => {
  let clientId = req.cookies.clientId;

  if (!clientId) {
    clientId = randomUUID();
    res.cookie("clientId", clientId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
  }

  res.send(`Hello World. Your clientId is ${clientId}`);
});

// GET all people
app.get("/people", (req: Request, res: Response) => {
  res.json(people);
});

// GET person by ID
app.get("/people/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const person = people.find(p => p.id === id);

  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }

  res.json(person);
});

// POST add a new person
app.post("/people", (req: Request, res: Response) => {
  const { name, age } = req.body;

  if (!name || typeof age !== "number") {
    return res.status(400).json({ message: "Name and age are required" });
  }

  const newPerson = {
    id: people.length ? Math.max(...people.map(p => p.id)) + 1 : 1,
    name,
    age,
  };

  people.push(newPerson);
  res.status(201).json(newPerson);
});

// DELETE a person by ID
app.delete("/people/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = people.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Person not found" });
  }

  const deletedPerson = people[index];
  people.splice(index, 1);

  res.json(deletedPerson);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
