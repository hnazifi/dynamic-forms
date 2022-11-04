import { Component, Input, OnInit } from '@angular/core';
import { DynamicFormsService } from "../dynamic-forms.service";
import { FormControl, FormGroup } from "@angular/forms";
import { SchemaModel } from "../../models/schema.model";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private service: DynamicFormsService) {
  }

  form!: FormGroup;
  schemaList!: SchemaModel[];

  ngOnInit(): void {
    this.service.get().subscribe(r => {
      this.schemaList = r;
      this.form = this.service.toFormGroup(r);
    });

  }

  getFormControlByField(field: string): FormControl {
    return this.form.get(field) as FormControl;
  }

  submit(): void {
    console.log(this.form.value)
  }
}
