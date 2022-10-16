import { Client, CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'clear',
    global: true,
    inTest: true,
    data: new SlashCommandBuilder().setName('clear').setDescription('N.A.').setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;