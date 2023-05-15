import { City } from "../Classes/City";

describe("City", () => {
    let city: City;

    beforeEach(() => {
    city = new City("Example City", 1000, 500);
    });

    test("constructor should set the properties correctly", () => {
    expect(city.naz).toBe("Example City");
    expect(city.h).toBe(1000);
    expect(city.s).toBe(500);
    });

    test("S() should calculate density correctly", () => {
    city.S();
    expect(city.density).toBe(2);
    });
});
