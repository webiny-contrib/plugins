import { CmsModelField, CmsModelFieldToGraphQLPlugin } from "@webiny/api-headless-cms/types";

interface CreateListFiltersParams {
  field: CmsModelField;
}

const createListFilters = ({ field }: CreateListFiltersParams) => {
  return `
          ${field.fieldId}: String
          ${field.fieldId}_not: String
          ${field.fieldId}_in: [String]
          ${field.fieldId}_not_in: [String]
          ${field.fieldId}_contains: String
          ${field.fieldId}_not_contains: String
      `;
};

const plugin: CmsModelFieldToGraphQLPlugin = {
  type: "cms-model-field-to-graphql",
  name: "cms-model-field-to-graphql-slug",
  fieldType: "slug",
  isSortable: true,
  isSearchable: true,
  read: {
    createTypeField({ field }) {
      return `${field.fieldId}: String`;
    },
    createGetFilters({ field }) {
      return `${field.fieldId}: String`;
    },
    createListFilters
  },
  manage: {
    createListFilters,
    createTypeField({ field }) {
      return `${field.fieldId}: String`;
    },
    createInputField({ field }) {
      return field.fieldId + ": String";
    }
  }
};

export default plugin;