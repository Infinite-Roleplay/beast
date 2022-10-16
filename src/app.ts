require("dotenv").config();
import { ActivityType, Client } from 'discord.js';
import { CommandsHandler } from './handlers/commands.handler';
import { EventsHandler } from './handlers/events.handler';
import { Configuration } from './utils/config.util';
import { Logging, LogType } from './utils/logging.util';
import { v4 as uuidV4 } from 'uuid';
import { ButtonsHandler } from './handlers/buttons.handler';
import axios from 'axios';

const appRunnerUuid: string = uuidV4();

const app: Client = new Client({
	intents: ["Guilds", "GuildMembers", "GuildMessages", "GuildMessageReactions", "MessageContent"],
	presence: {
		status: 'online',
		activities: [{ name: 'Studying SCP-#@{ej@1', type: ActivityType.Playing }]
	}
});

process.on("unhandledRejection", (reason: any, promise: Promise<any>) => {
	console.error(`Unhandled rejection: ${reason?.stack || reason}`);
})

const start = () => {
	const envConfig: Configuration = new Configuration();

	Logging.write(`Starting app ${appRunnerUuid}: ${envConfig.name} (${envConfig.version})`, LogType.Header);

	axios.get(envConfig.urls.main)
	.then(() => {
		CommandsHandler.handle().then(() => {
			EventsHandler.handle().then(() => {
				ButtonsHandler.handle().then(() => {
					app.login(process.env.TOKEN);
				})
			});
		});
	}).catch(reason => {
		Logging.write(`Failed connecting to the API. ${reason}`, LogType.Error);
	})
}

Logging.init().then(() => {
	start();
});

export default app;