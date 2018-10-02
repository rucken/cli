import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { DemoDto } from './demo.dto';
import { MetaDto } from '@demo/core-nestjs';

export class OutDemosDto {
  @Type(() => DemoDto)
  @ApiModelProperty({ type: DemoDto, isArray: true })
  demos: DemoDto[];
  @Type(() => MetaDto)
  @ApiModelProperty({ type: MetaDto })
  meta: MetaDto;
}
