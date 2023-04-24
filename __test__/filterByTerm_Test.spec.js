const filterByTerm = require("../tests/filterByTerm");

describe("Testing the filterByTerm-function: ", () => {
     // testing stuff, many
     test("it should filter by a search term (for name)", () => {
        // actual test
        // Arrange
        const input = [
            { id: 1, name: "James" },
            { id: 2, name: "Julie" },
            { id: 3, name: "Eugene" }
        ];
        const output = [{ id: 3, name: "Eugene" }];

         // Act
         let result =  filterByTerm(input, "Eugene");

         // Assert
        expect(result).toEqual(output);
    })
    
})