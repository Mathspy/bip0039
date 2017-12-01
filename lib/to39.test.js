const to39 = require("./to39")

describe("to39", () => {
	test("should turn number into bip39 words", () => {
		expect(to39(40146749)).toBe("tray myself abuse")
		expect(to39(28935854)).toBe("still toward absorb")
		expect(to39(18331861)).toBe("boy galaxy above")
		expect(to39(658611355)).toBe("nature all beauty")
	})
})