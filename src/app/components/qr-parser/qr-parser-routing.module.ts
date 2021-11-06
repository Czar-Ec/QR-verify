import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QrParserComponent } from "./qr-parser.component";

const routes: Routes = [
  { path: '', component: QrParserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QrParserRoutingModule { }
