import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { CustomEntityDto } from "./custom-entity.dto";
export class OutCustomEntityDto {
  @Type(() => CustomEntityDto)
  @ApiModelProperty({ type: CustomEntityDto })
  customEntity: CustomEntityDto;
}
