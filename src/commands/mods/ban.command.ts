import { Client, CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'ban',
    global: true,
    inTest: true,
    data: new SlashCommandBuilder().setName('ban').setDescription('N.A.').setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;