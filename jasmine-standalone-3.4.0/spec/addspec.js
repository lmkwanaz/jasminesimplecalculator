let add = require('../src/add');


describe("add numbers", function(){
    it("suppose to add two numbers",function(){
        expect(add(1, 2)).toBe(3);
      
    });
    it("suppose to add 3 numbers",function(){
       
        expect(add(20, 20, 20)).toBe(60);
        
    });
    it("suppose to add 4 numbers",function(){
      
        expect(add(15, 5, 10, 20)).toBe(50);
      
    });
    it("suppose to add 6 numbers",function(){
    
        expect(add(50, 10, 20, 30, 10, 20)).toBe(140);
       
    });
    it("suppose to add 7 numbers",function(){
        
        expect(add(70, 30, 30, 10, 20, 5, 5)).toBe(170);
       
    });
    it("suppose to add 8 numbers",function(){
      
        expect(add(100, 100, 20, 30, 50, 50, 10, 10)).toBe(370);
    });
});
