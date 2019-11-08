describe("add numbers", function(){
    it("suppose to add",function(){
        expect(add(1, 2, 3, 4)).toBe(10);
        expect(add(20, 20)).toBe(40);
        expect(add(15, 5)).toBe(20);
        expect(add(50, 10)).toBe(60);
        expect(add(70, 30)).toBe(100);
        expect(add(100, 100)).toBe(200);
    });
});
