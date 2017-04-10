describe("calculator", function () {
    var num1 = Math.floor((Math.random() * 100) + 1),
        num2 = Math.floor((Math.random() * 100) + 1);
    
    it("should add " + num1 + " and " + num2 + " to equal " + (num1 + num2), function() {
        expect(Calculator.add(num1, num2)).toBe(num1 + num2);
    });
    
    it("should subtract " + num1 + " and " + num2 + " to equal " + (num1 - num2), function() {
        expect(Calculator.sub(num1, num2)).toBe(num1 - num2);
    });
    
    it("should multiply " + num1 + " and " + num2 + " to equal " + (num1 * num2), function() {
        expect(Calculator.mult(num1, num2)).toBe(num1 * num2);
    });
    
    it("should divide " + num1 + " and " + num2 + " to equal " + (num1 / num2), function() {
        expect(Calculator.div(num1, num2)).toBe(num1 / num2);
    });
    
});