/* The snake in the game */
var snakeSize = 2;

var Snake = function (rastersize, context) {
    //this.height = rastersize;
    //this.width = rastersize;
    this.context = context;
    this.rastersize = rastersize;

    //this.xPos = 10;
    //this.yPos = 10;

    this.array = [];
    this.array[0] = new SnakeElement(10, 10, rastersize, context);
    this.array[1] = new SnakeElement(20, 10, rastersize, context);
    this.array[2] = new SnakeElement(30, 10, rastersize, context);

    //this.snakeSpeed = 10;
}

Snake.prototype.draw = function () {
    for (var i = 0; i <= snakeSize; i++) {
        this.array[i].drawElement();
    }
}

Snake.prototype.update = function (direction) {
    if (direction == undefined) {
        console.log("nothing");
        return;
    } else if (direction == 37) { // Left
        this.x = -10;
        this.y = 0;
    } else if (direction == 38) { // Up
        this.x = 0;
        this.y = -10;
    } else if (direction == 39) { // Right
        this.x = 10;
        this.y = 0;
    } else { // Down
        this.x = 0;
        this.y = 10;
    }
    this.newHead();  
}


Snake.prototype.moveUp = function () {
    //this.array[1].getXPos() -= this.snakeSpeed;
    console.log("up");
    this.x = 0;
    this.y = -10;
    //this.update(this.x, this.y);
}

Snake.prototype.moveDown = function () {
    //this.array[1].getYPos() += this.snakeSpeed;
    console.log("down");
    this.x = 0;
    this.y = 10;
    //this.update(this.x, this.y);
}

Snake.prototype.moveLeft = function () {
    //this.array[1].getXPos() -= this.snakeSpeed;
    console.log("left");
    this.x = -10;
    this.y = 0;
    //this.update(this.x, this.y);
}

Snake.prototype.moveRight = function () {
    //this.array[1].getYPos() += this.snakeSpeed;
    console.log("right");
    this.x = 10;
    this.y = 0;
    //this.update(this.x, this.y);
}

Snake.prototype.start = function () {
    console.log("Escape");
}

/*Snake.prototype.moveDefault = function () {
    console.log("default");
    this.newHead();
}*/
//}


Snake.prototype.newHead = function () {
    this.moveArray();
    this.array[snakeSize] = new SnakeElement(this.array[snakeSize - 1].getXPos() + this.x, this.array[snakeSize - 1].getYPos() + this.y, this.rastersize, this.context);
    this.draw();
}

Snake.prototype.moveArray = function () {
    for (var i = 0; i < snakeSize; i++) {
        this.array[i] = this.array[i + 1];
    }
}

Snake.prototype.grow = function () {
    snakeSize++;
    this.array[snakeSize] = new SnakeElement(this.array[snakeSize - 1].getXPos(), this.array[snakeSize - 1].getYPos(), this.rastersize, this.context);
}
