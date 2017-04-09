describe("calculator", function () {
    var num1 = Math.floor((Math.random() * 100) + 1),
        num2 = Math.floor((Math.random() * 100) + 1);
    
    it("should add numbers", function() {
        expect(Calculator.add(num1, num2)).toBe(num1 + num2);
    });
    
});