import { Router } from "express";
import { CreateUSerController } from "./controllers/UserController";

const routes = Router();
const createUserController = new CreateUSerController();

routes.post("/users", createUserController.handle);

export { routes };
