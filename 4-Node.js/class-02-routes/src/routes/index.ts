import { response, Router } from "express";

export const router = Router();

router.get("/", (_request, response) => {
  response.json({ name: "Class Routes" });
});

router.get("/users", (_req, res) => {
  res.json([
    { name: "Ash", age: 10 },
    { name: "Metre Came", age: 300 },
    { name: "Alucard", age: 500 },
  ]);
});
//route params
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  const user = [
    { id: 1, name: "Ash", age: 10 },
    { id: 2, name: "Metre Came", age: 300 },
    { id: 3, name: "Alucard", age: 500 },
  ];
  res.json(user[Number(id) - 1]);
});
//query params
router.get("/user", (req, res) => {
  const { id, name } = req.query;
  res.json({ id, name });
});

//body params
router.post("/user", (req, res) => {
  const { id, name, value } = req.body;
  res.json({ id, name, value });
});

