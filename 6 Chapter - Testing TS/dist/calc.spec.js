"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
describe("sum Fn", () => {
    it("check result value", () => {
        expect(calc_1.sum(10, 20, 30)).toBeGreaterThan(59);
    });
    test("check result value", () => {
        expect(calc_1.sum(10, 20, 30)).toBe(60);
    });
});
