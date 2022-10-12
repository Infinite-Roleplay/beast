import { Configuration } from "../utils/config.util";
import { IEvent } from "../utils/interfaces/event.interface"
import { CommandsHandler } from "../handlers/commands.handler";
import { REST, Routes, RESTPostAPIApplicationCommandsJSONBody, Client, Channel } from 'discord.js';
import { Logging, LogType } from '../utils/logging.util';
import { EmbedsUtil } from "../utils/embeds.util";

const event: IEvent = {
    name: 'ready',
    once: true,
    execute(app: Client){
		Logging.write('Initialization ended', LogType.Header);
        Logging.write('App is now ready !', LogType.Success);
		app.channels.fetch("1023002996499554304").then((channel: any) => {
			Logging.loggingChannel = channel;
			Logging.loggingChannel?.send({embeds: [EmbedsUtil.success("🤖 Bot started")]});
		})

		const appConfig: Configuration = new Configuration();
		const rest = new REST({version: '10'}).setToken(process.env.TOKEN || 'NO_TOKEN');
        const jsonCommands: RESTPostAPIApplicationCommandsJSONBody[] = CommandsHandler.commands.map(c => c.data.toJSON());

		try {
			appConfig.authorizedServers.forEach(s => {
				rest.put(
					Routes.applicationGuildCommands(app.user?.id || 'NO_ID', s),
					{ body: jsonCommands }
				)
			})
		} catch (err) {
			Logging.write(`${err}`, LogType.Error);
		}
    }
}

module.exports = event;