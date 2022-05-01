import {
	ButtonInteraction,
	Client,
	ColorResolvable,
	CommandInteraction,
	EmojiResolvable,
	Message,
	MessageActionRow,
	MessageEmbed,
	MessageReaction,
	TextChannel,
	User,
	MessageButtonStyle,
	GuildMember
} from 'discord.js'

export declare function colorInfo(
	message: Message,
): Promise<any>

export declare function delay(
	message: Message,
): Promise<any>

export declare function passGen(
	message: Message,
): Promise<any>

export declare function randomColor(
): Promise<any>

export class Wikipedia {
	constructor(options: WikipediaOptions);
	public fetch(): Promise<void>;
}

export class NPMinfo {
	constructor(options: WikipediaOptions);
	public fetch(): Promise<void>;
}