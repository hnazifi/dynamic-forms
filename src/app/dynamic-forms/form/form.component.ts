import { Component, Input, OnChanges } from '@angular/core';
import { DynamicFormsService } from "../dynamic-forms.service";
import { FormControl, FormGroup } from "@angular/forms";
import { SchemaModel } from "../../models/schema.model";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  constructor(private service: DynamicFormsService) {
  }

  form!: FormGroup;
  @Input() schemaList!: SchemaModel[];

  ngOnChanges(): void {
    this.form = this.service.toFormGroup(this.schemaList);
  }


  getFormControlByField(field: string): FormControl {
    return this.form.get(field) as FormControl;
  }

  submit(): void {
    console.log(this.form.value)
  }
}
