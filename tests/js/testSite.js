TestCase("TestSite", {

    testInit_Perfect_Perfect: sinon.test(function()
    {
        // Arrange
        targetArea = new TargetArea();
        sourceArea = new TargetArea();

        this.mock(targetArea).expects('draw').once();
        this.mock(sourceArea).expects('draw').once();

        var site = new Site();

        // Act
        site.initSite();
    })

});