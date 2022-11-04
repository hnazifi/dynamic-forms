import { Component, OnInit } from '@angular/core';
import { SchemaModel } from "../../models/schema.model";
import { DynamicFormsService } from "../../dynamic-forms/dynamic-forms.service";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  schemaList: SchemaModel[] = [];

  constructor(private formService: DynamicFormsService,
  ) {
  }

  fetch(): void {
    this.formService.get().subscribe(r => this.schemaList = r);
  }

  ngOnInit(): void {
    this.fetch();
  }

}
