import { BaseResourceModel, translate } from '@rucken/core';

export class Apple extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
        name: translate('Name'),
    title: translate('Title'),
    createdAt: translate('CreatedAt'),
    updatedAt: translate('UpdatedAt'),

  };
  static dateFields: any = ["createdAt","updatedAt"];
  static fields: any = [
  'id',
      'name',
    'title',
    'createdAt',
    'updatedAt',

  ];

id: number;
  name: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;

  static meta() {
  const meta: any = Apple;
  return meta;
}
constructor(obj ?: any) {
  super(obj);
}
parse(obj: any) {
  this.parseByFields(obj, Apple.meta());
}
format() {
  const result = this.formatByFields(Apple.meta());
  return result;
}
get asString() {
  return this.pk;
}
}
