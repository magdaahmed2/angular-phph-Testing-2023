describe("1-square pipe (isolation) testing:",()=>{

    it("expect to return 16 when passing 4",()=>{})
    it("expect to return 'Not a number' when passing wrong parameter",()=>{})
})

// Import the necessary dependencies
import { SquarePipe } from './your-square-pipe'; // Replace with the actual import path

describe("1-square pipe (isolation) testing:", () => {
   
    it("expect to return 16 when passing 4", () => {
        // Arrange
        const pipe = new SquarePipe();
        const input = 4;
        
        // Act
        const result = pipe.transform(input);
        
        // Assert
        expect(result).toBe(16);
    });

    it("expect to return 'Not a number' when passing wrong parameter", () => {
        // Arrange
        const pipe = new SquarePipe();
        const input = "invalidInput"; // An invalid input

        // Act
        const result = pipe.transform(input);

        // Assert
        expect(result).toBe('Not a number');
    });
});
