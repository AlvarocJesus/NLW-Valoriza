import { Router } from "express";
import { AuthenticatedUserController } from "./controllers/AuthenticateUserController";
import { ComplimentController } from "./controllers/ComplimentController";
import { TagController } from "./controllers/TagController";
import { CreateUSerController } from "./controllers/UserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const routes = Router();
const createUserController = new CreateUSerController();
const tagController = new TagController();
const authenticatedUserController = new AuthenticatedUserController();
const complimentController = new ComplimentController();

routes.post("/users", createUserController.handle);
routes.post("/tags", ensureAdmin, tagController.handle);
routes.post("/sessions", authenticatedUserController.handle);
routes.post("/compliments", complimentController.handle);

export { routes };
