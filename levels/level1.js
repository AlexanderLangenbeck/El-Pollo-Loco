let level1;

function initLevel(){
level1 = new level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new Endboss(),
    ],
    [
        new Cloud(0),
        new Cloud(719*2),
        new Cloud(719*3),
        new Cloud(719*4),
        new Cloud(719*5),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png',-719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png',-719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png',-719),
        

        new BackgroundObject('img/5_background/layers/air.png',0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png',0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png',0),
        new BackgroundObject('img/5_background/layers/air.png',719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png',719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png',719),

        new BackgroundObject('img/5_background/layers/air.png',719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png',719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png',719*2),
        new BackgroundObject('img/5_background/layers/air.png',719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png',719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png',719*3),
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ],
    [
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
        new Salsa_bottle(),
    ]
);
}