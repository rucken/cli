import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CustomEntityDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @MaxLength(100)
  @ApiModelProperty()
  name: string;

  @MaxLength(255)
  @IsNotEmpty()
  @ApiModelProperty()
  title: string;
}
