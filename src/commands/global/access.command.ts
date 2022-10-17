import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'access',
    global: true,
    inTest: true,
    data: new SlashCommandBuilder().setName('access').setDescription('Manage member access in the foundation'),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;