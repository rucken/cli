import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, MaxLength } from 'class-validator';

export class InDemoDto {  
  @IsOptional()
  id: number;
  @ApiModelProperty()
  @MaxLength(100)
  name: string;
  @ApiModelProperty()
  @MaxLength(100)
  title: string;

}
