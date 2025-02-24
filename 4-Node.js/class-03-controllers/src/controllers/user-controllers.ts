import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string({message: "Nome é obrigatório"}).min(3, "Mínimo de 3 caracteres!"),
  series: z.string().max(255, "Mínimo de 255 caracteres!"),
  age: z.number(),
  email: z.string().email(),
}) 

const a = JSON.parse("[\n  {\n    \"code\": \"invalid_type\",\n    \"expected\": \"string\",\n    \"received\": \"undefined\",\n    \"path\": [\n      \"name\"\n    ],\n    \"message\": \"Nome é obrigatório\"\n  }\n]");

console.log(a.message);


export const userControllers = {
  create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, series, age } = UserSchema.parse(req.body);
      if (!name || !series) {
        throw new AppError(400, "Todos os dados são obrigatórios");
      }

      console.log({ name, series });

      res.status(201).json({ message: "user created " });
    } catch (error) {
      next(error);
    }
  },
  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `user ${id} read` });
  },
  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, series } = req.body;

    console.log({ id, name, series });
    res.status(200).json({ message: "user updated" });
  },
  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `User ${id} deleted` });
  },
};
