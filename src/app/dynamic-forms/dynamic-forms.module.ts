import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from "../material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { FormItemComponent } from './form-item/form-item.component';

@NgModule({
  declarations: [
    FormComponent,
    FormItemComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DynamicFormsModule { }
