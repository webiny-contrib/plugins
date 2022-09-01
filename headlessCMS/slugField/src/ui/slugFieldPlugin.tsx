import React from 'react'

import { CmsEditorFieldTypePlugin } from '@webiny/app-headless-cms/types'
import { Select } from '@webiny/ui/Select'
import { Grid, Cell } from '@webiny/ui/Grid'

import { ReactComponent as SlugIcon } from './worm.svg'

const plugin: CmsEditorFieldTypePlugin = {
  type: "cms-editor-field-type",
  name: "cms-editor-field-type-slug",
  field: {
    type: "slug",
    label: "Slug",
    icon: <SlugIcon width={15.75} height={18} style={{padding: '4.125px 3px'}}/>,
    description: "Slugify an existing field in the model",
    allowMultipleValues: false,
    allowPredefinedValues: false,
    multipleValuesLabel: '',
    createField () {
      return {
        type: "slug",
        validation: [],
        settings: {
          fieldReference: ""
        },
        renderer: {
          name: "",
        }
      }
    },
    renderSettings(params) {

      const { form: { Bind }, contentModel } = params

      const options = contentModel.fields
        .filter(field => field.type !== 'slug')
        .filter(field => field.type === 'text')
        .map(field => ({value: field.fieldId, label: field.label || field.fieldId}))
        .map((o, i) => <option key={i} value={o.value}>{o.label}</option>)

      return (
        <Grid>
          <Cell span={12}>
            <Bind name='settings.fieldReference'>
              <Select label='Field to slugify'>
                { options }
              </Select>
            </Bind>
          </Cell>
        </Grid>
      )
    }
  },
}

export default plugin