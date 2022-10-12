import { Client, Interaction } from "discord.js";
import { CommandsHandler } from "../handlers/commands.handler";
import { Logging, LogType } from "../utils/logging.util";
import { IEvent } from "../utils/interfaces/event.interface";
import { ButtonsHandler } from "../handlers/buttons.handler";

const event: IEvent = {
    name: 'interactionCreate',
    execute(app: Client, interaction: Interaction){
        if(interaction.isCommand()){
            CommandsHandler.commands.filter(cmd => cmd.name === interaction.commandName).forEach(cmd => {
                try {
                    cmd.execute(interaction, app);
                } catch (err) {
                    Logging.write(`${err}`, LogType.Error);
                    interaction.reply(`An error occurred. Please contact an Administrator !`);
                }
            })
        }

        if(interaction.isButton()){
            ButtonsHandler.buttons.filter(button => button.name === interaction.customId).forEach(button => {
                try {
                    button.execute(interaction, app);
                } catch (err) {
                    Logging.write(`${err}`, LogType.Error);
                    interaction.reply(`An error occurred. Please contact an Administrator !`);
                }
            })
        }
    }
}

module.exports = event;