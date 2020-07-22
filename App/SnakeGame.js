var game = (function () {

    var privateContext;
    var privateCanvas;

    /* Game Constants */
    var GAME_WIDTH;
    var GAME_HEIGHT;
    var RASTER_SIZE = 10; // i.e. size of snake elements and apples

    var snake;
    var apple;
    var counter;

    /* key codes */
    var MOVE_UP = 38; //Arrow up
    var MOVE_RIGHT = 39; //Arrow right
    var MOVE_LEFT = 37; //Arrow left
    var MOVE_DOWN = 40; //Arrow down
    var START = 27;
    var direction;


    /* Variables and constants to control framerate */
    var FPS = 10; /* change this to change framerate in the game */
    var now;
    var then = Date.now();
    var interval = 1000 / FPS;
    var delta;

    // Draws the canvas
    function privateDraw() {
        window.requestAnimationFrame(privateDraw);

        now = Date.now();
        delta = now - then;

        if (delta > interval) {
            then = now - (delta % interval);
            console.log("Tick, now drawing with: " + FPS + "fps!");
            // draw and check collisions here...
            privateContext.clearRect(0, 0, GAME_HEIGHT, GAME_WIDTH);
            snake.draw();
            apple.draw();
            captureKeystrokes(canvas);
            snake.update(direction);
            //snake.moveUp();
            //snake.moveSnake();
            eatApple();
            checkCollision();

        }
    }

    // Setzt den Canvas und dessen Context als Variablen
    function privateSetContext(canvas) {
        privateCanvas = canvas;
        privateContext = canvas.getContext("2d");
    }

    /* Todo: Call this function only after player has pressed the start key */
    function privateStartGame() {
        /* Todo: initialize objects (i.e. apple, snake, counter) here */
        

        snake = new Snake(RASTER_SIZE, privateContext);
        apple = new Apple(RASTER_SIZE, privateContext);

        window.requestAnimationFrame(privateDraw);
    }

    function captureKeystrokes(canvas) {
        //bring canvas into focus to capture key strokes
        canvas.setAttribute('tabindex', '0');
        canvas.focus();
        canvas.addEventListener("keydown", keyPressed, false);
    }

    function keyPressed(keyEvent) {
        direction = keyEvent.keyCode;
        
        switch (direction) {
            case MOVE_UP:
                snake.moveUp();
                break;
            case MOVE_RIGHT:
                snake.moveRight();
                break;
            case MOVE_DOWN:
                snake.moveDown();
                break;
            case MOVE_LEFT:
                snake.moveLeft();
                break;
            case START:
                snake.start();
                break;
            /*default:
                snake.moveDefault();*/
        }
    }

    function eatApple() {
        if ((snake.array[snakeSize].getXPos() == apple.getXPos()) && (snake.array[snakeSize].getYPos() == apple.getYPos())) {
            apple.newApple();
            
            snake.grow();
            snakeSize1++;
        }
    }
    
    function checkCollision() {
        var topBorder = snake.array[snakeSize].getYPos();
        var rightBorder = snake.array[snakeSize].getXPos();
        var botBorder = snake.array[snakeSize].getYPos();
        var leftBorder = snake.array[snakeSize].getXPos();
        
        if (topBorder <= 0 || botBorder >= GAME_HEIGHT) {
            alert("Game Over!");
        } else if (rightBorder >= GAME_WIDTH || leftBorder <= 0) {
            alert("Game Over!")
        }
    }
    
    function publicInit(canvas) {
        GAME_HEIGHT = canvas.height;
        GAME_WIDTH = canvas.width;
        privateSetContext(canvas);
        privateStartGame();
    }

    return {
        init: publicInit
    };
})();
