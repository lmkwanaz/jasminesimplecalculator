describe("multiplication", function(){
    it("suppose to multiply numbers",function(){
        expect(multiply(1, 1)).toBe(1);
        expect(multiply(10, 10)).toBe(100);
        expect(multiply(2, 5)).toBe(10);
        expect(multiply(3, 3)).toBe(9);
        expect(multiply(6, 5)).toBe(30);
        expect(multiply(5, 5)).toBe(25);
    });
});