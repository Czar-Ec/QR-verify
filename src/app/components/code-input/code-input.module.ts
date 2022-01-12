import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/modules/material.module";
import { CodeInputRoutingModule } from "./code-input-routing.module";
import { CodeInputComponent } from "./code-input.component";

const components = [

]
@NgModule({
  declarations: [
    CodeInputComponent
  ],
  exports: [

  ],
  imports: [
    CodeInputRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class CodeInputModule { }