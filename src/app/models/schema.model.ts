import { InputTypeEnum } from "../enums/input-type.enum";
import { InputVisibilityEnum } from "../enums/input-visibility.enum";

export interface SchemaModel {
  field: string;
  label: string;
  type: InputTypeEnum;
  hidden: InputVisibilityEnum;
  mandatory: boolean;
}


