import { Router } from "express";
import { TagController } from "./controllers/TagController";
import { CreateUSerController } from "./controllers/UserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const routes = Router();
const createUserController = new CreateUSerController();
const tagController = new TagController()

routes.post("/users", createUserController.handle);
routes.post("/tags", ensureAdmin, tagController.handle);

export { routes };
