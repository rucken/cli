import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { map} from 'rxjs/operators';
import { Apple } from './../models/apple.model';
import { BaseRepositoryService, RepositoryHelper } from '@rucken/core';
import { HttpHelper } from '@rucken/core';
import { EndpointHelper } from '@rucken/core';
@Injectable()
export class ApplesService extends BaseRepositoryService {
  items$: Subject<Apple[]>;
  items: Apple[];
  apiUrl: string;

  constructor(
    public injector: Injector
  ) {
    super(injector);
    this.pluralName = 'apples';
    this.name = 'apple';
    this.apiUrl = `${this.repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<Apple[]>>new Subject();
  }
  transformModel(item: any) {
    return new Apple(item);
  }
  newCache() {
    return new ApplesService(this.injector);
  }
}
