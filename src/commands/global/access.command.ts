import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";

const command: ICommand = {
    name: 'access',
    global: true,
    inTest: true,
    data: new SlashCommandBuilder()
        .setName('access')
        .setDescription('Manage member access in the foundation')
        .addSubcommand(sc => sc
            .setName("add")
            .setDescription("Add an access to a member")
            .addUserOption(opt => opt.setName("target").setDescription("Member to add to").setRequired(true))
            .addRoleOption(opt => opt.setName("access").setDescription("Access to add").setRequired(true))
        )
        .addSubcommand(sc => sc
            .setName("list")
            .setDescription("List accesses of a member")
            .addUserOption(opt => opt.setName("target").setDescription("Member whose roles are listed").setRequired(true))
        )
        .addSubcommand(sc => sc
            .setName("remove")
            .setDescription("Remove an access to a member")
            .addUserOption(opt => opt.setName("target").setDescription("Member to remove to").setRequired(true))
            .addRoleOption(opt => opt.setName("access").setDescription("Access to remove").setRequired(true))
        ),
    execute(interaction: CommandInteraction, app: Client) {

    },
}

module.exports = command;