describe("All Test", function() {

  it("the sum of the numbers [1,2,3,4,5] are", function() {
    assert.equal([1,2,3,4,5].reduce(sum), 15);
   
  });
	it("the sum of the numbers [3,4,5] are", function() {
    assert.equal([3,4,5].reduce(sum), 12);
   
  });

 it("the multiple of the numbers [1,2,3,4,5] are", function() {
    assert.equal([1,2,3,4,5].reduce(mul), 120);
   
  });	
	
	it("the multiple of the numbers [3,4,5] are", function() {
    assert.equal([3,4,5].reduce(mul), 60);
   
  });	
	
it("Reversed for MICHEAL is:", function() {
    assert.equal(reverse("MICHEAL"), "LAEHCIM");
   
  });
	
	it("Words greater than the given length:", function() {
    assert.equal(longword(["MICHEAL", "I", "Am"], 4), "MICHEAL");
   
  });
	
});