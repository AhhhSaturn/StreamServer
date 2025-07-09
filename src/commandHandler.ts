import tmi from "tmi.js";
import { client } from ".";

export const commandHandler = (
	channel: string,
	userState: tmi.ChatUserstate,
	message: string,
	self: boolean,
) => {
	if (self) return;
	if (!message.startsWith("!")) return;
	const command = commandMap.get(message.split(" ")[0] as string);
	if (command) return command(channel, message, userState);
};

const commandMap = new Map<
	string,
	(channel: string, message: string, userState: tmi.ChatUserstate) => void
>();

commandMap.set("!hug", (channel, message, userSate) => {
	const args = message.split(" ");
	if (args.length > 1) {
		client.say(
			channel,
			`${userSate["display-name"]} hugged ${args[1]} ahhhsaHeart`,
		);
		return;
	}
	client.say(
		channel,
		`${userSate["display-name"]} hugged everyone ahhhsaHeart`,
	);
});

commandMap.set("!lurk", (channel, _message, userSate) => {
	client.say(channel, `${userSate["display-name"]} is lurking :3`);
});

commandMap.set("!unlurk", (channel, _message, userSate) => {
	client.say(channel, `${userSate["display-name"]} is back from lurking :3`);
});

commandMap.set("!discord", (channel) => {
	client.say(
		channel,
		"Join the Ahhh_Discord server! https://discord.com/invite/yqEvu9bu84",
	);
});

commandMap.set("!raid", (channel) => {
	client.say(
		channel,
		"Sub: ahhhsaWow ahhhsaAngy SATURN RAID ahhhsaAngy ahhhsaWow ",
	);
	client.say(
		channel,
		"Non-Sub: DinoDance PopNemo SATURN RAID PopNemo DinoDance",
	);
});
