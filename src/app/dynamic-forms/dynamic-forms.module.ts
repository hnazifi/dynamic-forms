import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from "../material/material.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', component: FormComponent}
]

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class DynamicFormsModule { }
