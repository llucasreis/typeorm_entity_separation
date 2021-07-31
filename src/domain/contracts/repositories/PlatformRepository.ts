import Platform, { PlatformData } from "@domain/entities/Platform";

export interface PlatformRepository {
  create(data: PlatformData): Promise<Platform>;
  findByName(name: string): Promise<Platform | undefined>;
}