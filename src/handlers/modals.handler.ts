import fs from 'fs';
import { IModal } from '../utils/interfaces/modal.interface';
import { Logging, LogType } from '../utils/logging.util';

export class ModalsHandler {
	static modals: IModal[] = [];

	static handle(): Promise<void>{
		return new Promise((resolve, reject) => {
			Logging.write(`Handling modals`, LogType.Title);
			Logging.write(`Scanning modals folder`);

			fs.readdirSync('./src/buttons').filter(el => el.endsWith('.button.ts')).forEach(file => {
				const modal: IModal = require(`../modals/${file}`);
				this.modals.push(modal);
				Logging.write(`Found ${modal.name}: ${file}`);
			});

			resolve();
		});
	}
}