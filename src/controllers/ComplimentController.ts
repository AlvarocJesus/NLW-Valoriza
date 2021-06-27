import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class ComplimentController {
  async handle(req: Request, res: Response) {
    const { tag_id, user_receiver, user_sender, message } = req.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execeute({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    return res.json(compliment);
  }
}

export { ComplimentController };
