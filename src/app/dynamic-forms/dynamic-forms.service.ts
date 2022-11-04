import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { SchemaModel } from "../models/schema.model";

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<SchemaModel[]> {
    return this.http.get<SchemaModel[]>('/assets/to-render.json');
  }

  toFormGroup(inputs: SchemaModel[]): FormGroup {
    const controls: { [name: string]: FormControl } = Object.assign({},
      ...inputs.map(item => ({[item.field]: new FormControl(null, item.mandatory ? [Validators.required] : [])})));
    return new FormGroup(controls);
  }
}
