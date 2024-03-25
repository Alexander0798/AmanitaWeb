import {type ResolveOptions} from "webpack";
import {type BuildOptions} from "./types/config";

export const buildResolve = (options: BuildOptions): ResolveOptions => {
    const {paths} = options;
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
};
