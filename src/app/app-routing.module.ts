import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'code',
    loadChildren: () => import('./components/code-input/code-input.module').then(mod => mod.CodeInputModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./components/qr-parser/qr-parser.module').then(mod => mod.QrParserModule)
  },
  { path: '**', redirectTo: 'code' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
