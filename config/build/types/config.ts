export type BuildMode = "development" | "production";

export type BuildPath = {
	entry: string;
	output: string;
	html: string;
	src: string;
};

export type BuildEnv = {
	mode: BuildMode;
	port: number;
	apiUrl: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPath;
	isDev: boolean;
	PORT: number;
	apiUrl: string;
	project: "frontend" | "jest";
};
