import { ButtonInteraction, Client } from "discord.js";

export interface IModal {
	name: string;
	execute: (interaction: ButtonInteraction, app: Client) => void;
}