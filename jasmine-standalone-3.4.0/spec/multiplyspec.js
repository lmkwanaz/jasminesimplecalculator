let multiply = require('../src/multiply');


describe("multiplication", function(){
    it("suppose to  multiply two numbers",function(){
        expect(multiply(1, 2)).toBe(2);
      
    });
    it("suppose to multiply 3 numbers",function(){
       
        expect(multiply(20, 2, 1)).toBe(40);
        
    });
    it("suppose to  multiply 4 numbers",function(){
      
        expect(multiply(50, 2, 1, 4)).toBe(400);
      
    });
    it("suppose to  multiply 6 numbers",function(){
    
        expect(multiply(50, 3, 2, 1, 4, 7)).toBe(8400);
       
    });
    it("suppose to  multiply 7 numbers",function(){
        
        expect(multiply(70, 30, 30, 10, 20, 5, 5)).toBe(315000000);
       
    });
    it("suppose to  multiply 8 numbers",function(){
      
        expect(multiply(100, 100, 20, 30, 50, 50, 10, 10)).toBe(1.5e+12);
    });
});