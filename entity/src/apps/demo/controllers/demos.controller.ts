import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiImplicitParam,
  ApiImplicitQuery,
  ApiResponse,
  ApiUseTags
} from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { Permissions } from '@demo/core-nestjs';
import { Roles } from '@demo/core-nestjs';
import { InDemoDto } from '../dto/in-demo.dto';
import { OutDemoDto } from '../dto/out-demo.dto';
import { OutDemosDto } from '../dto/out-demos.dto';
import { Demo } from '../entities/demo.entity';
import { AccessGuard } from '@demo/core-nestjs';
import { ParseIntWithDefaultPipe } from '@demo/core-nestjs';
import { DemosService } from '../services/demos.service';

@ApiUseTags('demos')
@ApiBearerAuth()
@Controller('/api/demos')
@UseGuards(AccessGuard)
export class DemosController {
  constructor(private readonly service: DemosService) {}
  @Roles('isSuperuser')
  @Permissions('add_demo')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: OutDemoDto,
    description: 'The record has been successfully created.'
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Post()
  async create(@Body() dto: InDemoDto) {
    try {
      return plainToClass(
        OutDemoDto,
        await this.service.create({
          item: plainToClass(Demo, dto)
        })
      );
    } catch (error) {
      throw error;
    }
  }
  @Roles('isSuperuser')
  @Permissions('change_demo')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutDemoDto,
    description: 'The record has been successfully updated.'
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiImplicitParam({ name: 'id', type: Number })
  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id,
    @Body() dto: InDemoDto
  ) {
    try {
      return plainToClass(
        OutDemoDto,
        await this.service.update({
          id,
          item: plainToClass(Demo, dto)
        })
      );
    } catch (error) {
      throw error;
    }
  }
  @Roles('isSuperuser')
  @Permissions('delete_demo')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The record has been successfully deleted.'
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiImplicitParam({ name: 'id', type: Number })
  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id) {
    try {
      return plainToClass(
        OutDemoDto,
        await this.service.delete({
          id
        })
      );
    } catch (error) {
      throw error;
    }
  }
  @Roles('isSuperuser')
  @Permissions('read_demo')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutDemoDto,
    description: ''
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiImplicitParam({ name: 'id', type: Number })
  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id) {
    try {
      return plainToClass(
        OutDemoDto,
        await this.service.findById({
          id
        })
      );
    } catch (error) {
      throw error;
    }
  }
  @Roles('isSuperuser')
  @Permissions('read_demo')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutDemosDto,
    description: ''
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiImplicitQuery({
    name: 'q',
    required: false,
    type: String,
    description: 'Text for search (default: empty)'
  })
  @ApiImplicitQuery({
    name: 'sort',
    required: false,
    type: String,
    description: 'Column name for sort (default: -id)'
  })
  @ApiImplicitQuery({
    name: 'per_page',
    required: false,
    type: Number,
    description: 'Number of results to return per page. (default: 10)'
  })
  @ApiImplicitQuery({
    name: 'cur_page',
    required: false,
    type: Number,
    description: 'A page number within the paginated result set. (default: 1)'
  })
  @Get()
  async findAll(
    @Query('cur_page', new ParseIntWithDefaultPipe(1)) curPage,
    @Query('per_page', new ParseIntWithDefaultPipe(10)) perPage,
    @Query('q') q,
    @Query('sort') sort
  ) {
    try {
      return plainToClass(
        OutDemosDto,
        await this.service.findAll({
          curPage,
          perPage,
          q,
          sort
        })
      );
    } catch (error) {
      throw error;
    }
  }
}
