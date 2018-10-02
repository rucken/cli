import { Inject, Injectable, MethodNotAllowedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CORE_CONFIG_TOKEN } from '@demo/core-nestjs';
import { Demo } from '../entities/demo.entity';
import { ICoreConfig } from '@demo/core-nestjs';

@Injectable()
export class DemosService {
  constructor(
    @Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig,
    @InjectRepository(Demo)
    private readonly repository: Repository<Demo>
  ) {}
  async create(options: { item: Demo }) {
    try {
      options.item = await this.repository.save(options.item);
      return { demo: options.item };
    } catch (error) {
      throw error;
    }
  }
  async update(options: { id: number; item: Demo }) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException('Not allowed in DEMO mode');
    }
    options.item.id = options.id;
    try {
      options.item = await this.repository.save(options.item);
      return { demo: options.item };
    } catch (error) {
      throw error;
    }
  }
  async delete(options: { id: number }) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException('Not allowed in DEMO mode');
    }
    try {
      let item = await this.repository.findOneOrFail(options.id, {
        relations: []
      });
      item = await this.repository.save(item);
      await this.repository.delete(options.id);
      return { demo: null };
    } catch (error) {
      throw error;
    }
  }
  async findById(options: { id: number }) {
    try {
      const item = await this.repository.findOneOrFail(options.id, {
        relations: []
      });
      return { demo: item };
    } catch (error) {
      throw error;
    }
  }
  async findAll(options: {
    curPage: number;
    perPage: number;
    q?: string;
    sort?: string;
  }) {
    try {
      let objects: [Demo[], number];
      let qb = this.repository.createQueryBuilder('demo');
      if (options.q) {
        qb = qb.where(
          'demo.name like :q or demo.title like :q or demo.id = :id',
          {
            q: `%${options.q}%`,
            id: +options.q
          }
        );
      }
      options.sort =
        options.sort &&
        new Demo().hasOwnProperty(options.sort.replace('-', ''))
          ? options.sort
          : '-id';
      const field = options.sort.replace('-', '');
      if (options.sort)
        if (options.sort[0] === '-') {
          qb = qb.orderBy('demo.' + field, 'DESC');
        } else {
          qb = qb.orderBy('demo.' + field, 'ASC');
        }
      qb = qb
        .skip((options.curPage - 1) * options.perPage)
        .take(options.perPage);
      objects = await qb.getManyAndCount();
      return {
        demos: objects[0],
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
