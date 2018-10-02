import { IsNotEmpty, MaxLength, validateSync } from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { CustomValidationError } from '@demo/core-nestjs';

@Entity({ name: 'demo' })
export class Demo {
  @PrimaryGeneratedColumn()
  id: number = undefined;
  @Column({ length: 100 })
  @IsNotEmpty()
  @MaxLength(100)
  name: string = undefined;
  @Column({ length: 100 })
  @IsNotEmpty()
  @MaxLength(100)
  title: string = undefined;


  @BeforeInsert()
  doBeforeInsertion() {
    const errors = validateSync(this, { validationError: { target: false } });
    if (errors.length > 0) {
      throw new CustomValidationError(errors);
    }
  }

  @BeforeUpdate()
  doBeforeUpdate() {
    const errors = validateSync(this, { validationError: { target: false } });
    if (errors.length > 0) {
      throw new CustomValidationError(errors);
    }
  }
}
