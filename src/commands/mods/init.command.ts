import { Client, CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'init',
    specificTo: ["1013899578652753930"],
    inTest: true,
    data: new SlashCommandBuilder().setName('init').setDescription('Init servers').setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;