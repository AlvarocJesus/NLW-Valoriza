import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

class CreateTagService {
  async execute(name: string){
    const tagsRepositories = getCustomRepository(TagsRepository);

    if(!name){
      throw new Error('incorrect name');
    }

    const tagAlreadyExist = await tagsRepositories.findOne({ name });

    if(tagAlreadyExist){
      throw new Error('tag already exist!');
    }

    const tag = await tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
