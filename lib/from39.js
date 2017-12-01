const map39 = require("./map39")

function from39(string) {
	try {
		return parseInt(string.split(" ").map(word => map39.from[word].toString(2)).reduce((full, curr) => curr + full, ""), 2)
	} catch(e) {
		throw("The following words don't exist in the bip39 specs: \n" + string.split(" ").filter(word => !map39.from[word]).join("\n"))
	}
}

module.exports = from39;