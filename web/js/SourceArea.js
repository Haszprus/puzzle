var SourceArea = PuzzleArea.extend({

    init: function()
    {
        this.randomArray = new Array(1,2,3,4,5,6,7,8,9);
        this.originalArray = this.randomArray.slice(0);
        this.randomArray.shuffle();
    },



    draw: function()
    {
        $sourceArea = $('<div id="sourceArea"></div>');
        this._super($sourceArea);
    },



    prepareCell: function($cell)
    {
        $cell.draggable({
            snap: '.cell',
            snapTolerance: 55,
            snapMode: 'inner'
        });
        $cell.addClass("sourceCell");
        $cell.text(this.randomArray.pop());

    }

});
