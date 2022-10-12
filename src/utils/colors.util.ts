import { ColorResolvable } from "discord.js";
import { IAppConfig } from "./interfaces/app.config.interface";
import fs from 'fs';

export class ColorsUtil {
    private _appConfig: IAppConfig;

	constructor(){
		this._appConfig = JSON.parse(fs.readFileSync('./src/config/app.config.json').toString());
	}

    get transparent(): ColorResolvable {
        return this._appConfig.colors.transparent;
    }

    get red(): ColorResolvable {
        return this._appConfig.colors.red;
    }

    get green(): ColorResolvable {
        return this._appConfig.colors.green;
    }

    get yellow(): ColorResolvable {
        return this._appConfig.colors.yellow;
    }

    get blurple(): ColorResolvable {
        return this._appConfig.colors.blurple;
    }
}