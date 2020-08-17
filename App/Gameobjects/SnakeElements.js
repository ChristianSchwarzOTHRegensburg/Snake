/* A SnakeElement in the game */

var SnakeElement = function (x, y, rastersize, context) {
    this.height = rastersize;
    this.width = rastersize;
    this.context = context;
    this.xPos = x;
    this.yPos = y;
}

SnakeElement.prototype.getXPos = function () {
    return this.xPos;
}

SnakeElement.prototype.getYPos = function () {
    return this.yPos;
}

SnakeElement.prototype.drawElement = function () {
    this.context.fillStyle = "blue";
    this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
}
