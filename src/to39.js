const map39 = require("./map39")

function to39(num) {
	return split11s(num.toString(2)).map(word => map39[parseInt(word, 2)]).reduce((sentence, word) => word + " " + sentence, "").trim();
}

function split11s(string) {
	let arr = [[]]
	for (var i = string.length - 1; i >= 0; i--) {
		if (arr[0].length === 11) {
			arr.unshift([]);
		}
		arr[0].unshift(string[i])
	}
	return arr.map(value => value.join(""))
}

module.exports = to39;