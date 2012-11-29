var PuzzleArea = Class.extend({

    draw: function($area)
    {
        $("#container").append($area);

        for (var i = 0; i < 9; i++)
        {
            this.drawCell($area);
        }

        $area.append("<div style='clear: both'></div>");
    },

    drawCell: function($target)
    {
        var $cell = $('<div class="cell"></div>');
        this.prepareCell($cell);
        $target.append($cell);
    },

    prepareCell: function($cell) { }

});