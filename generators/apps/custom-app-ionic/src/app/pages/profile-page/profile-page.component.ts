import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BindIoInner } from "ngx-bind-io";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@BindIoInner()
@Component({
  selector: "profile-page",
  templateUrl: "./profile-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  apiUrl = environment.apiUrl;
  title$: Observable<string>;
  constructor(public activatedRoute: ActivatedRoute) {
    this.title$ = activatedRoute.data.pipe(
      map(data => data && data.meta && data.meta.title)
    );
  }
}
