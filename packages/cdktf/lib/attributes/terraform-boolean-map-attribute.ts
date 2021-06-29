import { TerraformAttributeOptions } from "./terraform-attribute";
import { hashMapper, booleanToTerraform } from "../runtime";
import { TerraformMapAttribute } from "./terraform-map-attribute";
import {
  TerraformBoolean,
  TerraformBooleanAttribute,
} from "./terraform-boolean-attribute";
import { ITerraformAddressable } from "../terraform-addressable";
export class TerraformBooleanMapAttribute extends TerraformMapAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: { [key: string]: TerraformBoolean },
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): { [key: string]: TerraformBoolean } | undefined {
    return this.realValue;
  }

  public get(key: string): TerraformBooleanAttribute {
    return new TerraformBooleanAttribute(this, `${key}`);
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformBooleanMap | undefined
  ) {
    if (!(value instanceof TerraformBooleanMapAttribute)) {
      return new TerraformBooleanMapAttribute(
        parent,
        terraformAttribute,
        value
      );
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformBooleanMapAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return hashMapper(booleanToTerraform)(this.internalValue);
  }
}

export type TerraformBooleanMap =
  | { [key: string]: TerraformBoolean }
  | TerraformBooleanMapAttribute;