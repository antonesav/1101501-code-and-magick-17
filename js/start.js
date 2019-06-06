'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_WIDTH = 50;
var COLUMN_GAP = 50;
// var BAR_HEIGHT = 20;
// var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - GAP - COLUMN_GAP;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

function getRandomNumber(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    console.log(times);

    ctx.fillStyle = '#000';

    var maxTime = Math.round(getMaxElement(times));

    for (var i = 0; i < players.length; i++) {

        ctx.fillStyle = 'black';
        ctx.fillText(players[i], CLOUD_X + GAP + COLUMN_GAP + FONT_GAP + (GAP + TEXT_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - GAP );
        if(players[i] === 'Вы'){
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }else{
            ctx.fillStyle = 'rgba(0, 0, 255, .'+ getRandomNumber(2,9) +')';
        }
        ctx.fillRect(CLOUD_X + GAP + COLUMN_GAP + FONT_GAP + (GAP + TEXT_WIDTH) * i, CLOUD_Y + GAP + CLOUD_HEIGHT - COLUMN_GAP - (barHeight * times[i]) / maxTime , BAR_WIDTH, (barHeight * times[i]) / maxTime);
    }
};
