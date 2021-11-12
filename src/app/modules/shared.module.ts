import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
  ],
  exports: [
    CommonModule,
    HttpClientModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})

export class SharedModule { }
