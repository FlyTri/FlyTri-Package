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

export declare function tictactoe(
	message: Message,
	options?: tictactoeOptions
): Promise<any>
export declare function tictactoe(
	interaction: CommandInteraction,
	options?: tictactoeOptions
): Promise<any>