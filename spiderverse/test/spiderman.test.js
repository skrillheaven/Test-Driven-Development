/*describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
        const resultOfSomething = 1 + 2 //resultado de algo
        expect(resultOfSomething).toBe(18);
    })
})

//Test Driven Development by Martin Fowler*/


describe("Unit Test for Spiderman Class", () => {
    test('1) Create a spiderman object ', () => {
        const andrewGarfield = new Spiderman(
                "spiderman Sony", 31, "Andrew Garfield", 2, "The amazin spiderman", "Sony"
            )
            //validamos que elk codigo funcione

        expect(andrewGarfield.name).toBe("spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(31)
        expect(andrewGarfield.studio).toBe("Sony")
    });
})