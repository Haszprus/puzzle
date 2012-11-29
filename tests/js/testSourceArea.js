TestCase("TestSourceArea", {

    setUp: function()
    {
        /*:DOC +=

         <div id="container"></div>

         */
    },



    testInit_Perfect_Perfect: function()
    {
        // Arrange

        // Act
        var sourceArea = new SourceArea();

        // Assert
        assertEquals("originalArray should have 9 elements.", 9, sourceArea.originalArray.length);
        assertEquals("wrong originalArray.", new Array(1,2,3,4,5,6,7,8,9), sourceArea.originalArray);
        assertEquals("randomArray should have 9 elements.", 9, sourceArea.randomArray.length);
    },



    testDraw_Perfect_Perfect: function()
    {
        // Arrange
        var sourceArea = new SourceArea();


        // Act
        sourceArea.draw();

        // Assert
        assertTrue("sourceArea should be visible", $('#sourceArea').is(":visible"));
        assertTrue("sourceArea should be in #container", $('#container #sourceArea').is(":visible"));
        assertEquals("sourceArea should have divs", 9, $('#sourceArea div.sourceCell').size());
    },



    testPrepareCell_Perfect_Perfect: sinon.test(function()
    {
        // Arrange
        var sourceArea = new SourceArea();

        $cell = $("<div></div>");
        this.mock($cell).expects('addClass').withArgs('sourceCell');
        this.mock($cell).expects('draggable').withArgs({
            snap: '.cell',
            snapTolerance: 55,
            snapMode: 'inner'
        });

        sourceArea.randomArray = new Array(1,2,3,4,"a");

        // Act
        sourceArea.prepareCell($cell);

        // Assert
        assertEquals('Cell text should be "a"','a',$cell.text());

    })



});
