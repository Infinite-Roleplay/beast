import fs from 'fs';
import { Logging, LogType } from '../utils/logging.util';
import { IButton } from "../utils/interfaces/button.interface";

export class ButtonsHandler {
	static buttons: IButton[] = [];

	static handle(): Promise<void>{
		return new Promise((resolve, reject) => {
			Logging.write(`Handling buttons`, LogType.Title);
			Logging.write(`Scanning buttons folder`);

			fs.readdirSync('./src/buttons').filter(el => el.endsWith('.button.ts')).forEach(file => {
				const button: IButton = require(`../buttons/${file}`);
				this.buttons.push(button);
				Logging.write(`Found ${button.name}: ${file}`);
			});

			resolve();
		});
	}
}