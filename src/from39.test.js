const from39 = require("./from39")

describe("from39", () => {
	test("should turn string into its orignal numerical value", () => {
		expect(from39("tray myself abuse")).toBe(40146749)
		expect(from39("still toward absorb")).toBe(28935854)
	})
})