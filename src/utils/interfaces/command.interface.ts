import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface Permission {
	id: string;
	type: 'ROLE' | 'USER' | 'CHANNEL';
	permission: boolean;
}

export interface ICommand {
	name: string;
	data: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
	execute: (interaction: CommandInteraction, app: Client) => void;
	timeout?: number;
	restrictToChannel?: string[];
	permissions?: Permission[];
	inTest?: boolean;
}