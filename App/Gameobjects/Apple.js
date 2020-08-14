/* An Apple in the game */

var Apple = function (rastersize, context) {
    this.height = rastersize;
    this.width = rastersize;
    this.context = context;
    this.xPos = determineRandomPosition();
    this.yPos = determineRandomPosition();
}

Apple.prototype.getXPos = function () {
    return this.xPos;
}

Apple.prototype.getYPos = function () {
    return this.yPos;
}

Apple.prototype.draw = function () {
    this.context.fillStyle = "red";
    this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
}

Apple.prototype.newApple = function () {
    this.xPos = determineRandomPosition();
    this.yPos = determineRandomPosition();
    this.context.fillStyle = "red";
    this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
}

function determineRandomPosition() {
    return (Math.floor(Math.random() * 30) * 10);
}
