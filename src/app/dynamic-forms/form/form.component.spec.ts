import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { SchemaModel } from "../../models/schema.model";
import { InputTypeEnum } from "../../enums/input-type.enum";
import { InputVisibilityEnum } from "../../enums/input-visibility.enum";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormItemComponent } from "../form-item/form-item.component";
import { MaterialModule } from "../../material/material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('FormComponent', () => {
  const sampleSchema: SchemaModel[] = [
    {
      "field": "name",
      "label": "Name",
      "type": InputTypeEnum.Text,
      "hidden": InputVisibilityEnum.False,
      "mandatory": true
    },
    {
      "field": "email",
      "label": "Email",
      "type": InputTypeEnum.Text,
      "hidden": InputVisibilityEnum.False,
      "mandatory": true
    },
    {
      "field": "confirm",
      "label": "Checkbox with confirmation",
      "type": InputTypeEnum.Check,
      "hidden": InputVisibilityEnum.False,
    },
    {
      "field": "hiddenField",
      "label": "",
      "type": InputTypeEnum.Text,
      "hidden": InputVisibilityEnum.True,
      "mandatory": false
    }
  ];

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  let hostElement: DebugElement;
  let nameInput: DebugElement;
  let emailInput: DebugElement;
  let confirmInput: DebugElement;
  let hiddenInput: DebugElement;
  let submitButton: DebugElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, FormItemComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, MaterialModule, NoopAnimationsModule],
    })
      .createComponent(FormComponent);

    fixture = TestBed.createComponent(FormComponent);

    component = fixture.componentInstance;
    component.schemaList = sampleSchema;
    component.ngOnChanges();

    fixture.detectChanges();

    hostElement = fixture.debugElement;
    nameInput = fixture.debugElement.query(By.css('input[name=name]'));
    emailInput = fixture.debugElement.query(By.css('input[name=email]'));
    confirmInput = fixture.debugElement.query(By.css('input[type=checkbox]'));
    hiddenInput = fixture.debugElement.query(By.css('input[name=hiddenField]'));
    submitButton = fixture.debugElement.query(By.css('button'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enabled submit button when all mandatory inputs are provided', () => {
    expect(hostElement.nativeElement.querySelector('button').disabled).toBeTruthy();
    (nameInput.nativeElement as HTMLInputElement).value = "Hadi";
    (emailInput.nativeElement as HTMLInputElement).value = "hadi@example.com";
    (nameInput.nativeElement as HTMLInputElement).dispatchEvent(new Event('input'));
    (emailInput.nativeElement as HTMLInputElement).dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(hostElement.nativeElement.querySelector('button').disabled).toBeFalsy();
  });
});
