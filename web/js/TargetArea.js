var TargetArea = PuzzleArea.extend({

    draw: function()
    {
        $targetArea = $('<div id="targetArea"></div>');
        this._super($targetArea);
    },

    prepareCell: function($cell)
    {
        $cell.droppable();
        $cell.addClass("targetCell");
    }

});
