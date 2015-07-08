//test sample
describe("Wiki/Tweet Search Engine", function(){
  describe("buildRow", function(){
    it("should return a valid results row", function(){
    	var validRow,
    			cell1,
    			cell2;
    	
    	cell1 = "value1";
    	cell2 = "value2";
    	
    	validRow = "<div class='row'><div class='col-sm-4 col-xs-12'><strong>" + cell1 + "</strong></div>";
			validRow += "<div class='col-sm-8 col-xs-12'>" + cell2 + "</div></div>";

      chai.assert.equal(searchEngine.buildRow(cell1, cell2), validRow);

    });
	  it("should return an invalid results row", function(){
	  	var invalidRow;

	  	invalidRow = "";

	    chai.assert.notEqual(searchEngine.buildRow(), invalidRow);

	  });
  });
});