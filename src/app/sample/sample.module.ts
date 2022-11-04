import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { DynamicFormsModule } from "../dynamic-forms/dynamic-forms.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', component: SampleComponent}
]

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    DynamicFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SampleModule {
}
