import { GuildMember } from "discord.js";

export class MemberUtil {
    static exist(member: GuildMember): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            
        });
    }

    static getPrefix(member: GuildMember): string {
        return "";
    }
}