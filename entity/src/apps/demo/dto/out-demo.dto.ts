import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { DemoDto } from './demo.dto';
export class OutDemoDto {
  @Type(() => DemoDto)
  @ApiModelProperty({ type: DemoDto })
  demo: DemoDto;
}
