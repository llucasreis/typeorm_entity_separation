import { PlatformRepository } from "@domain/contracts/repositories/PlatformRepository";
import Platform, { PlatformData } from "@domain/entities/Platform";

export default class CreatePlatformUseCase {
  constructor(private platformRepository: PlatformRepository) {}

  public async execute(data: PlatformData): Promise<Platform> {
    const platformAlreadyExist = await this.platformRepository.findByName(data.name);

    if (platformAlreadyExist) {
      throw new Error("Platform already exist");
    }
    return this.platformRepository.create(data);
  }
}