import { Client, CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'kick',
    global: true,
    inTest: true,
    data: new SlashCommandBuilder().setName('kick').setDescription('N.A.').setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;