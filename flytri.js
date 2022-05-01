//Checking if the NodeJS version is 16 or higher
if (process.version.slice(1, 3) - 0 < 16)
	throw new Error(
		`NodeJS Version 16 or newer is required, but you are using ${process.version}. See https://nodejs.org/`
	)

//Checking if Discord.js is installed, bcs why not
try {
	require('discord.js')
} catch (e) {
	throw new Error('Discord.JS is required for this package to run')
}

//Getting the version of discord.js
const { version: discordJSVersion } = require(require('path').join(
	require.resolve('discord.js'),
	'..',
	'..',
	'package.json'
))

//Checking if discord.js is at version 13
if (discordJSVersion.slice(0, 2) !== '13')
	throw new Error(
		`Discord.JS version 13 is required, but you are using ${discordJSVersion}. See https://www.npmjs.com/package/discord.js`
	)

require("./src/checkUpdate")()

//Function
module.exports.delay = require("./src/function/delay")

module.exports.ms = require("./src/function/ms")

module.exports.passGen = require("./src/function/passGen")

//Class
module.exports.Wikipedia = require("./src/class/Wikipedia")

module.exports.NPMinfo = require("./src/class/NPMinfo")