Example Headless CMS plugin to demonstrate the community plugin contribution process.
This plugin is created by following the [community plugin contribution guide](#) and [headless CMS custom field tutorial](https://www.webiny.com/docs/tutorials/headless-cms/create-a-webiny-headless-cms-custom-field-plugin/#storage-transformations). 


## Plugin setup for the contribution
To set up the plugin with your Webiny project, please execute the following steps:

### 1. Clone plugins repository to the project root

`git clone https://github.com/webiny-contrib/plugins`

### 2. Add secretText plugin to the workspaces
Open the `package.json` present at project root and add `plugins/headlessCMS/secretText` line  under `workspaces`

### 3. Install dependencies and link the secretText workspace
Run `yarn link-workspaces` from the project root. 

### 4. Import Field Type Plugin 

Import the `secretTextFieldPlugin` in `apps/admin/code/src/plugins/headlessCms.ts`.

```
import secretTextFieldPlugin from "@webiny-contrib/secret-text/src/ui/secretTextFieldPlugin";

(...)

secretTextFieldPlugin
```

### 5. Import Field Renderer Plugin

Import the `secretTextFieldRendererPlugin` plugin in `apps/admin/code/src/plugins/headlessCms.ts`


```
import secretTextFieldRendererPlugin from "@webiny-contrib/secret-text/src/ui/secretTextFieldRendererPlugin"

(...)

secretTextFieldRendererPlugin()
```

### 6. Import Field To GraphQL Plugin

Import `secretTextFieldPlugin` API plugin in `api/code/headlessCMS/src/index.ts`.

```
import secretTextFieldPlugin from "@webiny-contrib/secret-text/src/api/secretTextFieldPlugin"

(...)

secretTextFieldPlugin
```

### 7. Import Storage Transformations Plugin

Import this `secretTextFieldStoragePlugin` plugin in `api/code/headlessCMS/src/index.ts`

```
import secretTextFieldStoragePlugin from "@webiny-contrib/secret-text/src/api/secretTextFieldStoragePlugin"

(...)

secretTextFieldStoragePlugin()
```


### 8. Watch the admin and API application
To watch admin and API application, run the following command in the terminal.

`yarn webiny watch apps/admin --env dev`  

`yarn webiny watch api/code/headlessCMS --env dev`

More details on `watch` command can be found [here](https://www.webiny.com/docs/how-to-guides/use-watch-command).

### Make the updates and raise the pull request
You can make the respective code changes to `plugins/headlessCMS/secretText` directory.
Once the changes are ready, please create a pull request to https://github.com/webiny-contrib/plugins repository.







