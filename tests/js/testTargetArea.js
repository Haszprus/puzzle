TestCase("TestTargetArea", {


    setUp: function()
    {
        /*:DOC +=

         <div id="container"></div>

         */
    },



    testDraw_Perfect_Perfect: function()
    {
        // Arrange
        var targetArea = new TargetArea();

        // Act
        targetArea.draw();

        // Assert
        assertTrue("targetArea should be visible", $('#targetArea').is(":visible"));
        assertTrue("targetArea should be in #container", $('#container #targetArea').is(":visible"));
        assertEquals("targetArea should have divs", 9, $('#targetArea div.targetCell').size());
    },



    testDrawCell_Perfect_Perfect: sinon.test(function()
    {
        // Arrange
        var targetArea = new TargetArea();
        $('#container').append('<div id="targetArea"></div>');

        this.mock(targetArea).expects('prepareCell');

        // Act
        targetArea.drawCell($('#targetArea'));

        // Assert
        assertTrue("cell should be in #targetArea", $('#targetArea div.cell').is(":visible"));
    }),



    testPrepareCell_Perfect_Perfect: sinon.test(function()
    {
        // Arrange
        var targetArea = new TargetArea();

        $cell = $("<div></div>");
        this.mock($cell).expects('addClass').withArgs('targetCell');
        this.mock($cell).expects('droppable');

        // Act
        targetArea.prepareCell($cell);

        // Assert
    })

});