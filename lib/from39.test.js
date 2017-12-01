const from39 = require("./from39")

describe("from39", () => {
	test("should turn string into its orignal numerical value", () => {
		expect(from39("tray myself abuse")).toBe(40146749)
		expect(from39("still toward absorb")).toBe(28935854)
		expect(from39("boy galaxy above")).toBe(18331861)
		expect(from39("nature all beauty")).toBe(658611355)
	})
})