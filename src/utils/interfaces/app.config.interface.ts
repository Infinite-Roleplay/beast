import { ColorResolvable } from "discord.js";

export interface IAppConfig {
	informations: {
		name: string;
		version: string;
	};
	colors: {
		blurple: ColorResolvable;
		yellow: ColorResolvable;
		green: ColorResolvable;
		red: ColorResolvable;
		transparent: ColorResolvable;
	};
	credentials: {
		HOST: string;
		PORT: number;
		USER: string;
		DATABASE: string;
	};
	authorizedServers: string[];
	commandsOnlyChannels: any;
	mainServer: string;
}