import {
  Injectable,
  MethodNotAllowedException,
  NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@rucken/core-nestjs";
import { Repository } from "typeorm";
import { CustomEntity } from "../entities/custom-entity.entity";

@Injectable()
export class CustomEntitiesService {
  constructor(
    @InjectRepository(CustomEntity)
    private readonly repository: Repository<CustomEntity>
  ) {}

  async create(options: { item: CustomEntity }, user?: User) {
    try {
      options.item = await this.repository.save(options.item);
      return { customEntity: options.item };
    } catch (error) {
      throw error;
    }
  }

  async update(options: { id: number; item: CustomEntity }, user?: User) {
    options.item.id = options.id;
    try {
      options.item = await this.repository.save(options.item);
      return { customEntity: options.item };
    } catch (error) {
      throw error;
    }
  }

  async delete(options: { id: number }, user?: User) {
    try {
      await this.repository.delete(options.id);
      return { customEntity: null };
    } catch (error) {
      throw error;
    }
  }

  async findById(options: { id: number }, user?: User) {
    try {
      let object: CustomEntity;
      let qb = this.repository.createQueryBuilder("customEntity");
      qb = qb.andWhere("customEntity.id = :id", {
        id: +options.id
      });
      object = await qb.getOne();
      if (!object) {
        throw new NotFoundException();
      }
      return { customEntity: object };
    } catch (error) {
      throw error;
    }
  }

  async findAll(
    options: {
      curPage: number;
      perPage: number;
      q?: string;
      sort?: string;
    },
    user?: User
  ) {
    try {
      let objects: [CustomEntity[], number];
      let qb = this.repository.createQueryBuilder("customEntity");
      if (options.q) {
        qb = qb.andWhere(
          "(customEntity.title like :q or customEntity.name like :q or customEntity.id = :id)",
          {
            q: `%${options.q}%`,
            id: +options.q
          }
        );
      }
      options.sort =
        options.sort &&
        new CustomEntity().hasOwnProperty(options.sort.replace("-", ""))
          ? options.sort
          : "-id";
      const field = options.sort.replace("-", "");
      if (options.sort) {
        if (options.sort[0] === "-") {
          qb = qb.orderBy("customEntity." + field, "DESC");
        } else {
          qb = qb.orderBy("customEntity." + field, "ASC");
        }
      }
      qb = qb
        .skip((options.curPage - 1) * options.perPage)
        .take(options.perPage);
      objects = await qb.getManyAndCount();
      return {
        customEntities: objects[0],
        meta: {
          perPage: options.perPage,
          totalPages:
            options.perPage > objects[1]
              ? 1
              : Math.ceil(objects[1] / options.perPage),
          totalResults: objects[1],
          curPage: options.curPage
        }
      };
    } catch (error) {
      throw error;
    }
  }
}
