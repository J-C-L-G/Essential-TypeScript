import {sum} from "./calc";

describe("sum Fn", () => {
    it("check result value", () => {
        expect(sum(10, 20, 30)).toBeGreaterThan(59);
    });

    test("check result value", () => {
        expect(sum(10, 20, 30)).toBe(60);
    });
});