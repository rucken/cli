import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { CustomEntityDto } from "./custom-entity.dto";
import { MetaDto } from "@rucken/core-nestjs";

export class OutCustomEntitiesDto {
  @Type(() => CustomEntityDto)
  @ApiModelProperty({ type: CustomEntityDto, isArray: true })
  customEntities: CustomEntityDto[];

  @Type(() => MetaDto)
  @ApiModelProperty({ type: MetaDto })
  meta: MetaDto;
}
