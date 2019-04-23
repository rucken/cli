import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BindIoInner } from "ngx-bind-io";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

declare var require: any;
@BindIoInner()
@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  public readme = require("html-loader!markdown-loader!./../../../../../../README.md").replace(
    '<h1 id="custom-app-ionic">custom-app-ionic</h1>',
    ""
  );
  title$: Observable<string>;
  constructor(public activatedRoute: ActivatedRoute) {
    this.title$ = activatedRoute.data.pipe(
      map(data => data && data.meta && data.meta.title)
    );
  }
}
