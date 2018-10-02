import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'demos-frame',
  templateUrl: './demos-frame.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosFrameComponent {
  public apiUrl = environment.apiUrl;
  constructor(
    public activatedRoute: ActivatedRoute
  ) {
  }
}
