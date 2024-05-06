import Route from "express";
import { UserController } from "../controllers/user";

const users_routes = Route();
const controller = new UserController();

const BASE_PATH = "/users";
users_routes.post(BASE_PATH, controller.create);
users_routes.get(BASE_PATH, controller.get);
users_routes.get(`${BASE_PATH}/:id`, controller.find);
users_routes.put(`${BASE_PATH}/:id`, controller.update);
users_routes.delete(`${BASE_PATH}/:id`, controller.delete);

export { users_routes };
