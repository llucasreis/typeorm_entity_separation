import { PlatformRepository } from "@domain/contracts/repositories/PlatformRepository";
import TypeOrmPlatformRepository from "@infra/typeorm/repositories/TypeOrmPlatformRepository";


export default function PlatformRepositoryFactory(): PlatformRepository {
  return new TypeOrmPlatformRepository();
}