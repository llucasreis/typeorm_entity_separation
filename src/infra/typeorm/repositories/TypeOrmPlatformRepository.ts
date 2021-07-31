import { PlatformRepository } from "@domain/contracts/repositories/PlatformRepository";
import Platform, { PlatformData } from "@domain/entities/Platform";
import { getRepository, Repository } from "typeorm";
import PlatformEntity from "../entities/PlatformEntity";

export default class TypeOrmPlatformRepository implements PlatformRepository {
  private ormRepository: Repository<Platform>;

  constructor() {
    this.ormRepository = getRepository<Platform>(PlatformEntity);
  }

  public async create(data: PlatformData): Promise<Platform> {
    const newPlatform = await this.ormRepository.save(data);

    return newPlatform;
  }

  public async findByName(name: string): Promise<Platform | undefined> {
    const platform = await this.ormRepository.findOne({ where: { name }});

    return platform;
  }
}
