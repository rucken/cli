import { translate } from '@rucken/core';
import { DemosFrameComponent } from './demos-frame.component';
import { MetaGuard } from '@ngx-meta/core';

export const DemosFrameRoutes = [
  {
    path: '',
    component: DemosFrameComponent,
    canActivate: [MetaGuard],
    data: {
      name: 'demos',
      meta: {
        title: translate('Demos'),
        description: translate('Demos frame')
      }
    }
  }
];
