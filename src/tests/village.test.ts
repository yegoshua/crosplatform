import { Village } from "../Classes/Village";

describe("Village", () => {
let village: Village;

beforeEach(() => {
    village = new Village("Example Village", 1000, 50, 500);
    });

    test("constructor should set the properties correctly", () => {
        expect(village.naz).toBe("Example Village");
        expect(village.h).toBe(1000);
        expect(village.numberInHouse).toBe(50);
        expect(village.s).toBe(500);
    });

    test("S() should calculate density correctly", () => {
        village.S();
        expect(village.density).toBe(100);
    });
});