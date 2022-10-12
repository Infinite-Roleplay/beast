require("dotenv").config();
import { ActivityType, Client } from 'discord.js';
import { CommandsHandler } from './handlers/commands.handler';
import { EventsHandler } from './handlers/events.handler';
import { Configuration } from './utils/config.util';
import { Database } from './utils/database.util';
import { Logging, LogType } from './utils/logging.util';
import { v4 as uuidV4 } from 'uuid';
import { ButtonsHandler } from './handlers/buttons.handler';

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
	const appConfig: Configuration = new Configuration();

	Logging.write(`Starting app ${appRunnerUuid}: ${appConfig.name} (${appConfig.version})`, LogType.Header);

	Logging.write(`Database loading`, LogType.Title);
	Logging.write(`Connecting to database... (${appConfig.credentials.USER}@${appConfig.credentials.HOST}:${appConfig.credentials.PORT})`);
	new Promise<void>((resolve, reject) => {
		Database.pool.query("SELECT 1", (err: string) => {
			if(err){
				Logging.write(err, LogType.Error);
				reject();
			}
			Logging.write(`Successfully connected to database !`, LogType.Success);
			resolve();
		});
	}).then(() => {
		CommandsHandler.handle().then(() => {
			EventsHandler.handle().then(() => {
				ButtonsHandler.handle().then(() => {
					app.login(process.env.TOKEN);
				})
			});
		});
	})
}

Logging.init().then(() => {
	start();
});

export default app;