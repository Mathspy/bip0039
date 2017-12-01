const chalk = require("chalk")
const yargs = require("yargs")
const argv = yargs.option("to", {
		alias: ["to39", "t"],
		description: "Turn a decimal number into bip39 magical words",
		number: true
	}).option("from", {
		alias: ["from39", "f"],
		description: "Turn a sentence into the number it originated from",
		string: true
	}).argv;

const to39 = require("./to39")
const from39 = require("./from39")

if (argv.to && !argv.from) {
	if (!Number.isNaN(argv.to)) {
		if (Number.isInteger(argv.to)) {
			console.log(`${argv.to}: ${to39(argv.to)}`)
		} else {
			console.log(chalk.red("ERROR: Number must be an integer"))
		}
	}
} else if (!argv.to && argv.from) {
	try {
		console.log(from39(argv.from))
	} catch(e) {
		console.log(chalk.red("ERROR:" e))
	}
} else if (argv.to && argv.from) {
	console.log(chalk.red("ERROR: Can't \"to\" and \"from\" at the same time, sorry mate!"))
} else {
	yargs.showHelp("log")
}