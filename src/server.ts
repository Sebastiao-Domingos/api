import express from "express";
import { users_routes } from "./routes/index.routes";

const app = express();

const port = 3333;

app.use(users_routes);

app.listen(port, () => {
  console.log("Esta rodando na porta : " + port);
});
