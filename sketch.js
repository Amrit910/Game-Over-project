var player, block;

function preLoad(){
    var canvas(200,200);
}

function draw(){
    drawSprites();
}

player = createSprite(200,200);
box = createSprite(300,200);
text = createSprite(200,200);

text.visibility = false;

if (box.isTouching(player)){
    text.visibility = true;
}

box.display();
player.display();