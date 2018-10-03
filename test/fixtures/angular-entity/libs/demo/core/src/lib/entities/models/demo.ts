import { IsNotEmpty } from 'class-validator';
import { IModel } from 'ngx-repository';
import { translate } from '@rucken/core';

export class Demo implements IModel {
  static strings = {
    id: translate('Id'),
    name: translate('Name'),
    title: translate('Title'),

    createTitle: translate('Add new demo'),
    viewTitle: translate('Demo #{{id}}'),
    updateTitle: translate('Update demo #{{id}}'),
    deleteTitle: translate('Delete demo #{{id}}'),
    deleteMessage: translate('Do you really want to delete demo?')
  };
  id: number = undefined;
  @IsNotEmpty()
  name: string = undefined;
  @IsNotEmpty()
  title: string = undefined;

  toString() {
    return this.name;
  }
}
