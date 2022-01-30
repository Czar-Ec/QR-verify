import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/modules/material.module";
import { QrParserRoutingModule } from "./qr-parser-routing.module";
import { QrParserComponent } from "./qr-parser.component";
import { QrService } from "./qr-service/qr.service";
import { GuestDisplayComponent } from './guest-display/guest-display.component';
import { FaqsComponent } from "./faqs/faqs.component";

const components = [
  QrParserComponent,
]

@NgModule({
  declarations: [
    ...components,
    GuestDisplayComponent,
    FaqsComponent
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    QrParserRoutingModule,
    MaterialModule,
  ],
  providers: [
    QrService
  ]
})
export class QrParserModule { }