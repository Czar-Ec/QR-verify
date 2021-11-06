import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CodeInputComponent } from "./code-input.component";

const routes: Routes = [
  {
    path: '',
    component: CodeInputComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CodeInputRoutingModule { }
