import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "@rucken/core";
import { NgxRepositoryModule } from "ngx-repository";

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    NgxRepositoryModule.forRoot(),
    TranslateModule.forChild(),
    IonicModule
  ],
  exports: [
    CommonModule,
    PipesModule,
    NgxRepositoryModule,
    TranslateModule,
    IonicModule
  ]
})
export class SharedModule {}
