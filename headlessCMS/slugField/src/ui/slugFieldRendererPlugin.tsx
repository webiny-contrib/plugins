import React, { useEffect } from 'react'
import { Input } from "@webiny/ui/Input";
import { CmsEditorFieldRendererPlugin } from "@webiny/app-headless-cms/types";
import slugify from 'slugify'

export default (): CmsEditorFieldRendererPlugin => ({
  type: "cms-editor-field-renderer",
  name: "cms-editor-field-renderer-slug",
  renderer: {
    rendererName: "slug",
    name: `Slug`,
    description: `Leave empty to generate from referenced field`,
    canUse({ field }) {
      return field.type === "slug";
    },
    render({ field, getBind }) {
      const reference = field.settings && field.settings['fieldReference'] as string
      const Bind = getBind();

      return (
        <Bind>
          {bind => {
            const refFieldValue = bind.form.data[reference || ''] as string || undefined

            useEffect(() => {
              bind.form.setValue(field.fieldId, slugify(refFieldValue || '', {lower: true}))
            }, [refFieldValue])
            
            return (<Input
              {...bind}
              label={field.label}
              placeholder={field.placeholderText}
              description={field.helpText}
              disabled
            />
          )}
        }
        </Bind>
      );
    }
  }
});