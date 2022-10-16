import { IEnvConfig } from "./interfaces/env.interface";
import fs from 'fs';

export class Configuration {
	private _envConfig: IEnvConfig;

	constructor(){
		this._envConfig = JSON.parse(fs.readFileSync('./src/config/env.config.json').toString());
	}

	get name(){
		return this._envConfig.informations.name;
	}

	get version(){
		return this._envConfig.informations.version;
	}

	get urls(){
		return this._envConfig.urls;
	}

	get authorizedServers(): string[] {
		return this._envConfig.authorizedServers;
	}

	get mainServer(): string {
		return this._envConfig.mainServer;
	}

	public getCommandsOnly(gid: string): string[] {
		return this._envConfig.commandsOnlyChannels[gid] || [];
	}

	get globalRoles(): string[] {
		return this._envConfig.globalRoles;
	}
}