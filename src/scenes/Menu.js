class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){ //something that loads before game starts
        //load images/tile sprite
        //('what you want to define the name as', 'where is this in the folder')
        this.load.image('rocket','./assets/fork.png'); //https://www.cleanpng.com/png-fork-knife-spoon-tableware-cutlery-fork-162554/
        this.load.image('spaceship','./assets/meat.png'); //https://www.clipart.email/clipart/cartoon-meat-clipart-291207.html
        this.load.image('starfield','./assets/starfield.png');
        //load spritesheet
        this.load.spritesheet('explosion','./assets/boom.png',{frameWidth: 192, frameheight: 191, startFrame: 0, endFrame: 20}); //https://www.subpng.com/png-1mtyxe/

        //load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/stab.wav'); //https://freesound.org/people/InspectorJ/sounds/413496/
        this.load.audio('sfx_rocket', './assets/stab.wav');
    }

    create(){
        //menu display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        

        //displays menu text
        // add this text to screen at (x axis,y axis,string)
        // 0,0 coordination is upper left corner
        //this.add.text(20,20,"Rocket Patrol Menu");
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY- textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use <--> arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX,centerY + textSpacer,'Press <- for Easy or -> for Hard', menuConfig).setOrigin(0.5);

        //launch the next scene
        //this.scene.start("playScene");

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (keyLEFT.isDown) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
        if (keyRIGHT.isDown) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                // faster time to end the game
                gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }

        // goes back to menu if left key is pressed down
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
    }
}