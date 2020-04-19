//spaceship prefab
class spaceship extends Phaser.GameObjects.Sprite{
    //(scene,x,y,texture,frame,, pointValue)
    //adding pointValue so that further spaceships can be worth more points
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);

        
        scene.add.existing(this); //add object to existing scene
        this.points = pointValue;
       
    }

    update(){
        //move spaceship left
        //this.x -=3;
        this.x -= game.settings.spaceshipSpeed;

        //wraparound screen bounds
        if(this.x <=0 - this.width){
            //this.x = game.config.width;
            this.reset();
        }
        
    }

    reset(){
        this.x = game.config.width;
    }
}