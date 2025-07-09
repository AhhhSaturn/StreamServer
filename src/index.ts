import tmi from "tmi.js";
import { commandHandler } from "./commandHandler";

export const client = new tmi.Client({
	logger: {
		error: (message) => {
			console.log(message);
		},
		info: (message) => {
			console.log(message);
		},
		warn: (message) => {
			console.log(message);
		},
	},
	identity: {
		username: Bun.env.USER,
		password: Bun.env.PASS,
	},
	channels: ["ahhh_saturn"],
});

await client.connect();
client.on("message", commandHandler);
