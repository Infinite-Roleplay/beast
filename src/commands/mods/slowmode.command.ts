import { Client, CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'slowmode',
    global: true,
    inTest: true,
    data: new SlashCommandBuilder().setName('slowmode').setDescription('N.A.').setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;