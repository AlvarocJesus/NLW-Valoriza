import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
  tag_id: string;
  user_receiver: string;
  user_sender: string;
  message: string;
}

class CreateComplimentService {
  async execeute({
    message,
    tag_id,
    user_receiver,
    user_sender,
  }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    if (user_sender === user_receiver) {
      throw new Error("Incorrect user receiver");
    }

    const userReceicerExist = await usersRepository.findOne(user_receiver);

    if (!userReceicerExist) {
      throw new Error("User receiver does not exist");
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
