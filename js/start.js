'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_WIDTH = 50;
var COLUMN_GAP = 50;
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
    if (players.length !== times.length){
        times.length = players.length;
    }
    
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 3, CLOUD_Y + GAP * 3);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 3, CLOUD_Y + GAP * 5);
    var maxTime = Math.round(getMaxElement(times));

    for (var i = 0; i < players.length; i++) {
        times[i] = Math.round(times[i]);
        ctx.fillStyle = 'black';
        ctx.fillText(times[i], CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_Y + GAP + CLOUD_HEIGHT - COLUMN_GAP - (barHeight * times[i]) / maxTime - GAP);
        ctx.fillText(players[i], CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - GAP );

        if (players[i] === 'Вы'){
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }else{
            ctx.fillStyle = 'rgba(0, 0, 255, .'+ getRandomNumber(2,9) +')';
        }

        ctx.fillRect(CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_Y + GAP + CLOUD_HEIGHT - COLUMN_GAP - (barHeight * times[i]) / maxTime , BAR_WIDTH, (barHeight * times[i]) / maxTime);
    }
};
