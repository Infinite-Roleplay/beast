import { ButtonInteraction, Client } from "discord.js";

export interface IButton {
	name: string;
	execute: (interaction: ButtonInteraction, app: Client) => void;
}