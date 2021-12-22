import { createBuildPackage } from "@webiny/project-utils";

export default {
    commands: {
        build: createBuildPackage({ cwd: __dirname })
    }
};
