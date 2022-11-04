import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from "../material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { FormItemComponent } from './form-item/form-item.component';

const routes: Routes = [
  {path: '', component: FormComponent}
]

@NgModule({
  declarations: [
    FormComponent,
    FormItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class DynamicFormsModule { }
