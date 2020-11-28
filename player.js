class Player{
    constructor(x,y,w,h){

    }
}

if (mousePressed(UP_ARROW)){
    player.velocityY(3);
}

if (mousePressed(DOWN_ARROW)){
    player.velocityY(-3);
}

if (mousePressed(RIGHT_ARROW)){
    player.velocityX(3);
}

if (mousePressed(LEFT_ARROW)){
    player.velocityX(-3);
}