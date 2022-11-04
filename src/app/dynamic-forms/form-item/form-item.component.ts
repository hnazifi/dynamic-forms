import { Component, Input, OnInit } from '@angular/core';
import { InputTypeEnum } from 'src/app/enums/input-type.enum';
import { InputVisibilityEnum } from 'src/app/enums/input-visibility.enum';
import { SchemaModel } from "../../models/schema.model";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  @Input() schema!: SchemaModel;
  @Input() control!: FormControl;

  InputTypeEnum: typeof InputTypeEnum = InputTypeEnum;
  InputVisibilityEnum: typeof InputVisibilityEnum = InputVisibilityEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
