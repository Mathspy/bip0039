const map39 = require("./map39")

function from39(string) {
	return parseInt(string.split(" ").map(word => map39.from[word].toString(2)).reduce((full, curr) => curr + full, ""), 2)
}

module.exports = from39;