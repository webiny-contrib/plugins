## Introduction
Example Headless CMS plugin to demonstrate the community plugin contribution process.

This plugin is created by following the [Community Plugins Guide](https://deploy-preview-378--webiny-docs.netlify.app/docs/community-plugins/introduction) and [Headless CMS Custom Field Plugin](https://www.webiny.com/docs/tutorials/headless-cms/create-a-webiny-headless-cms-custom-field-plugin) tutorial.


![Field Definition](./assets/field-definition.png)

This custom field plugin will store encrypted data into the database, and decrypt it after retrieving it from the database, more details can be found in [this tutorial](https://www.webiny.com/docs/tutorials/headless-cms/create-a-webiny-headless-cms-custom-field-plugin).

## Maintainers
<table>
    <tr>
        <td align="center">
            <a href="https://github.com/Pavel910">
                <img src="https://avatars1.githubusercontent.com/u/3920893?v=4" width="100px;" alt="Pavel Denisjuk"/>
                <br />
                <sub><b>Pavel Denisjuk</b></sub>
            </a>
            <br />
        </td>
        <td align="center">
            <a href="https://github.com/swapnilmmane">
                <img src="https://avatars0.githubusercontent.com/u/7145848?v=4" width="100px;" alt="Swapnil M Mane"/>
                <br />
                <sub><b>Swapnil M Mane</b></sub>
            </a>
            <br />
        </td>
    </tr>
</table>

## How to Contribute to Secret Text Plugin?
To set up the plugin with your Webiny project, please execute the following steps:

### 1. Clone `plugins` Repository to the Project Root

`git clone https://github.com/webiny-contrib/plugins`

### 2. Add secretText Plugin to the Workspaces
Open the `package.json` present at project root and add `plugins/headlessCMS/secretText` line  under `workspaces`

### 3. Install Dependencies and Link the Workspace
Run `yarn && yarn link-workspaces` from the project root.

### 4. Watch the `secretText` Package
Run `yarn webiny watch  -p @webiny-contrib/secret-text` from the project root.
This command will build the `secretText` package and watch for the further code changes.
More details on `watch` command can be found [here](https://www.webiny.com/docs/how-to-guides/use-watch-command).

### 5. Import Field Type Plugin

Import the `secretTextFieldPlugin` in `apps/admin/code/src/plugins/headlessCms.ts`.

```
import secretTextFieldPlugin from "@webiny-contrib/secret-text/ui/secretTextFieldPlugin";

(...)

secretTextFieldPlugin
```

### 6. Import Field Renderer Plugin

Import the `secretTextFieldRendererPlugin` plugin in `apps/admin/code/src/plugins/headlessCms.ts`


```
import secretTextFieldRendererPlugin from "@webiny-contrib/secret-text/ui/secretTextFieldRendererPlugin"

(...)

secretTextFieldRendererPlugin()
```

### 7. Import Field To GraphQL Plugin

Import `secretTextFieldPlugin` API plugin in `api/code/headlessCMS/src/index.ts`.

```
import secretTextFieldPlugin from "@webiny-contrib/secret-text/api/secretTextFieldPlugin"

(...)

secretTextFieldPlugin
```

### 8. Import Storage Transformations Plugin

Import this `secretTextFieldStoragePlugin` plugin in `api/code/headlessCMS/src/index.ts`

```
import secretTextFieldStoragePlugin from "@webiny-contrib/secret-text/api/secretTextFieldStoragePlugin"

(...)

secretTextFieldStoragePlugin()
```

### 9. Watch the admin and api application
To watch admin and api applications, run the following command from the project root.

`yarn webiny watch apps/admin --env dev`  

`yarn webiny watch api/code/headlessCMS --env dev`

More details on `watch` command can be found [here](https://www.webiny.com/docs/how-to-guides/use-watch-command).

### 10. Make the Updates and Raise the Pull Request
To improve the plugin, you can make the respective code changes to `plugins/headlessCMS/secretText` directory.
Once the changes are ready, please create a pull request to https://github.com/webiny-contrib/plugins repository.
