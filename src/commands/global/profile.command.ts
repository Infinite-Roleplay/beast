import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'profile',
    global: true,
    inTest: true,
    data: new SlashCommandBuilder().setName('profile').setDescription('N.A.'),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;