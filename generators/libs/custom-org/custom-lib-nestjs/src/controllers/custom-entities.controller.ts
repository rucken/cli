import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  MethodNotAllowedException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiImplicitParam,
  ApiImplicitQuery,
  ApiResponse,
  ApiUseTags
} from "@nestjs/swagger";
import {
  CORE_CONFIG_TOKEN,
  ICoreConfig,
  ParseIntWithDefaultPipe,
  Permissions,
  Roles
} from "@rucken/core-nestjs";
import { plainToClass } from "class-transformer";
import { InCustomEntityDto } from "../dto/in-custom-entity.dto";
import { OutCustomEntityDto } from "../dto/out-custom-entity.dto";
import { OutCustomEntitiesDto } from "../dto/out-custom-entities.dto";
import { CustomEntity } from "../entities/custom-entity.entity";
import { CustomEntitiesService } from "../services/custom-entities.service";

@ApiUseTags("custom-entities")
@ApiBearerAuth()
@Controller("/api/custom_entities")
export class CustomEntitiesController {
  constructor(
    @Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig,
    private readonly service: CustomEntitiesService
  ) {}

  @Roles("isSuperuser")
  @Permissions("add_custom-entity")
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: OutCustomEntityDto,
    description: "The record has been successfully created."
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @Post()
  async create(@Req() req, @Body() dto: InCustomEntityDto) {
    try {
      return plainToClass(
        OutCustomEntityDto,
        await this.service.create(
          {
            item: plainToClass(CustomEntity, dto)
          },
          req.user
        )
      );
    } catch (error) {
      throw error;
    }
  }

  @Roles("isSuperuser")
  @Permissions("change_custom-entity")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutCustomEntityDto,
    description: "The record has been successfully updated."
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @ApiImplicitParam({ name: "id", type: Number })
  @Put(":id")
  async update(
    @Req() req,
    @Param("id", new ParseIntPipe()) id,
    @Body() dto: InCustomEntityDto
  ) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException("Not allowed in DEMO mode");
    }
    try {
      return plainToClass(
        OutCustomEntityDto,
        await this.service.update(
          {
            id,
            item: plainToClass(CustomEntity, dto)
          },
          req.user
        )
      );
    } catch (error) {
      throw error;
    }
  }

  @Roles("isSuperuser")
  @Permissions("delete_custom-entity")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "The record has been successfully deleted."
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @ApiImplicitParam({ name: "id", type: Number })
  @Delete(":id")
  async delete(@Req() req, @Param("id", new ParseIntPipe()) id) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException("Not allowed in DEMO mode");
    }
    try {
      return plainToClass(
        OutCustomEntityDto,
        await this.service.delete(
          {
            id
          },
          req.user
        )
      );
    } catch (error) {
      throw error;
    }
  }

  @Roles("isSuperuser")
  @Permissions("read_custom-entity")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutCustomEntityDto,
    description: ""
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @ApiImplicitParam({ name: "id", type: Number })
  @Get(":id")
  async load(@Req() req, @Param("id", new ParseIntPipe()) id) {
    try {
      return plainToClass(
        OutCustomEntityDto,
        await this.service.findById(
          {
            id
          },
          req.user
        )
      );
    } catch (error) {
      throw error;
    }
  }

  @Roles("isSuperuser")
  @Permissions("read_custom-entity")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutCustomEntitiesDto,
    description: ""
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @ApiImplicitQuery({
    name: "q",
    required: false,
    type: String,
    description: "Text for search (default: empty)"
  })
  @ApiImplicitQuery({
    name: "sort",
    required: false,
    type: String,
    description: "Column name for sort (default: -id)"
  })
  @ApiImplicitQuery({
    name: "per_page",
    required: false,
    type: Number,
    description: "Number of results to return per page. (default: 10)"
  })
  @ApiImplicitQuery({
    name: "cur_page",
    required: false,
    type: Number,
    description: "A page number within the paginated result set. (default: 1)"
  })
  @Get()
  async findAll(
    @Req() req,
    @Query("cur_page", new ParseIntWithDefaultPipe(1)) curPage,
    @Query("per_page", new ParseIntWithDefaultPipe(10)) perPage,
    @Query("q") q,
    @Query("sort") sort
  ) {
    try {
      return plainToClass(
        OutCustomEntitiesDto,
        await this.service.findAll(
          {
            curPage,
            perPage,
            q,
            sort
          },
          req.user
        )
      );
    } catch (error) {
      throw error;
    }
  }
}
