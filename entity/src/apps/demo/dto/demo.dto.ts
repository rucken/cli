import { MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class DemoDto {  
  @ApiModelProperty({ type: Number })
  id: number;
  @ApiModelProperty()
  @MaxLength(100)
  name: string;
  @ApiModelProperty()
  @MaxLength(100)
  title: string;

}
