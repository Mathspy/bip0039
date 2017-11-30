const to39 = require("./to39")

describe("to39", () => {
	test("should turn number into bip39 words", () => {
		expect(to39(40146749)).toBe("guess caught afraidgi")
	})
})