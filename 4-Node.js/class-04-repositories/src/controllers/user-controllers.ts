import { NextFunction, query, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { z } from "zod";
import { sqliteConnection } from "../databases";
import { randomUUID } from "node:crypto";
import { compare, hash } from "bcrypt";

const UserSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .min(3, "Mínimo de 3 caracteres!"),
  email: z.string().email(),
  password: z.string().min(3),
});

const a = JSON.parse(
  '[\n  {\n    "code": "invalid_type",\n    "expected": "string",\n    "received": "undefined",\n    "path": [\n      "name"\n    ],\n    "message": "Nome é obrigatório"\n  }\n]'
);

console.log(a.message);

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = UserSchema.parse(req.body);

      const passwordHash = await hash(password, 10);

      const user = {
        id: randomUUID(),
        name,
        email,
        password: passwordHash,
      };

      const db = await sqliteConnection();
      const sqlQuery =
        "INSERT INTO users (id, name, email, password) VALUES (?,?,?,?)";

      await db.run(sqlQuery, [user.id, user.name, user.email, user.password]);

      res.status(201).json({ message: "user created ", userID: user.id });
    } catch (error) {
      next(error);
    }
  },
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      if (!password) {
        throw new AppError(400, "password is required");
      }

      const db = await sqliteConnection();
      const querySQL = "SELECT * FROM users WHERE id = ?";

      const user = await db.get(querySQL, [id]);
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new AppError(401, "password does not match!");
      }

      res.status(200).json({ message: `user ${id} read`, user });
    } catch (error) {
      next(error);
    }
  },
  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    console.log({ id, name, email, password });
    res.status(200).json({ message: "user updated" });
  },
  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `User ${id} deleted` });
  },
};
