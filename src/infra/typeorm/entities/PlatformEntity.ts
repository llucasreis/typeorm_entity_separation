import { PlatformData } from "@domain/entities/Platform";
import { EntitySchema } from "typeorm";
import BaseEntity from "./BaseEntity";

const PlatformEntity = new EntitySchema<PlatformData>({
  name: "platforms",
  columns: {
    ...BaseEntity,
    name: {
      type: String,
      unique: true
    }
  }
});

export default PlatformEntity;