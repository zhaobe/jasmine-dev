// describe block is one test case that will test helloworld.js

describe("Hello World", function() {
    
    it("should Return Hello World", function() {
        expect(helloworld()).toEqual('Hello World');
    })
})