import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../../utils/interfaces/command.interface";
import { EmbedsUtil } from "../../utils/embeds.util";
import axios, { AxiosResponse } from 'axios';
import { API } from "../../utils/api.util";

const command: ICommand = {
    name: 'format',
    global: true,
    timeout: 10,
    data: new SlashCommandBuilder()
        .setName('format')
        .setDescription('Format a string')
        .addStringOption(opt =>
            opt.setName("type")
            .setDescription("[Role, Channel] Type of font you want")
            .setRequired(true)
            .addChoices(
                {name: 'Role', value: 'ft_role'},
                {name: 'Channel', value: 'ft_channel'}
            )
        )
        .addStringOption(opt => opt.setName("text").setDescription("Text you want to format").setRequired(true)),
    execute(interaction: CommandInteraction, app: Client) {
        const toType: string = interaction.options.get('type')?.value?.toString() || `ft_role`;
        const toFormat: string = interaction.options.get('text')?.value?.toString() || `I'm blue dabadee dabada`;

        axios.post(toType === "ft_role" ? new API().formatRole() : new API().formatChannel(), {data: toFormat})
        .then((res: AxiosResponse) => {
            if(res.data){
                interaction.reply({embeds: [EmbedsUtil.info('🕺 Here is it !', [`\`${res.data.data}\``])], ephemeral: true});
            } else {
                interaction.reply({embeds: [EmbedsUtil.warning('😖 No result found')], ephemeral: true});
            }
        }).catch(reason => {
            interaction.reply({embeds: [EmbedsUtil.error('😕 An error occured. Please contact our administration team')], ephemeral: true});
        })
    },
}

module.exports = command;