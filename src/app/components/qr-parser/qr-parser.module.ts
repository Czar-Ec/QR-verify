import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/modules/material.module";
import { QrParserRoutingModule } from "./qr-parser-routing.module";
import { QrService } from "./qr-service/qr.service";

const components = [
]

@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    QrParserRoutingModule,
    MaterialModule
  ],
  providers: [
    QrService
  ]
})
export class QrParserModule { }