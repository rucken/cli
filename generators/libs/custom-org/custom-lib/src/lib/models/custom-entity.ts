import {
  transformDateToString,
  transformStringToDate,
  translate
} from "@rucken/core";
import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { IModel } from "ngx-repository";

export class CustomEntity implements IModel {
  static strings = {
    id: translate("Id"),
    name: translate("Name"),
    title: translate("Title"),
    createdAt: translate("Created at"),
    updatedAt: translate("Updated at"),

    createTitle: translate("Add new custom entity "),
    viewTitle: translate("Custom entity  #{{id}}"),
    updateTitle: translate("Update custom entity  #{{id}}"),
    deleteTitle: translate("Delete custom entity  #{{id}}"),
    deleteMessage: translate("Do you really want to delete custom entity ?")
  };

  id: number = undefined;

  @IsNotEmpty()
  name: string = undefined;

  title: string = undefined;

  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  createdAt: Date | string = undefined;

  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  updatedAt: Date | string = undefined;

  toString() {
    return this.title;
  }
}
