import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class TagController{
  async handle(req: Request, res: Response){
    const { name } = req.body;

    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return res.json(tag);
  }
}

export { TagController };