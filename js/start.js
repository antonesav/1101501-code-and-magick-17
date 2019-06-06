var renderCloud = function (ctx,x,y,color) {
    ctx.fillStyle = color;
    // ctx.fillRect(x, y)
}

window.renderStatistics = function (ctx, names, times) {
    var MAX_WIDTH_GRAPH = 200;
    names = ['Вы','Петька','Васька','Танос'];
    times = ['2000','2500','3000','3200'];

    // Отрисовка блока

    ctx.fillStyle = 'rgba(0,0,0, .7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = '#fff';
    ctx.fillRect(100, 10, 420, 270);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = "black";
    ctx.fillText('Ура вы победили!' , 130 , 40);
    ctx.fillText('Список результатов:' , 130 , 60);


}
console.log();