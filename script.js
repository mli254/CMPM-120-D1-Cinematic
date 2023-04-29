class Loading extends Phaser.Scene {
    constructor()
    {
        super('loading');
    }

    preload()
    {
        this.load.image('loading', './assets/loading.png');
    }

    create()
    {
        this.cameras.main.fadeIn(750, 0,0,0);

        // loading text
        this.loading = this.add.image(750, 510, 'loading');
        this.loading.setScale(0.5); // resize
        this.loading.alpha = 0;

        this.time.delayedCall(1000, () => {
            this.add.tween({
                targets: this.loading,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
        })

        // circle 1 (smallest)
        // let thing = this.add.circle(150, 150, 100, 0xff0000)
        let smallCircle = this.add.circle(900, 500, 5, 0xe8eddf);
        smallCircle.alpha = 0;
        
        this.time.delayedCall(2000, () => {
            this.add.tween({
                targets: smallCircle,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
        })

        // circle 2 (medium)
        let medCircle = this.add.circle(930, 480, 10, 0xe8eddf);
        medCircle.alpha = 0;
        
        this.time.delayedCall(3000, () => {
            this.add.tween({
                targets: medCircle,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
        })

        // circle 3 (largest)
        let largeCircle = this.add.circle(955, 440, 15, 0xe8eddf);
        largeCircle.alpha = 0;
        
        this.time.delayedCall(4000, () => {
            this.add.tween({
                targets: largeCircle,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
        })

        // adding instructions
        this.startText = this.add.text(50, 50, "Click to move to the next scene.");
        this.startText.setTint(0xe8eddf);
        this.startText.alpha = 0;

        this.time.delayedCall(5000, () => {
            this.add.tween({
                targets: this.startText,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
        })

        // let NKey = this.input.keyboard.addKey('N');
        this.time.delayedCall(5000, () => {
            this.input.on('pointerdown', function () 
            {
                this.cameras.main.fadeOut(2000, 0,0,0);
                this.time.delayedCall(2001, () => {
                    this.scene.start('logo');
                })
            }, this);
        })

        console.log("Press 's' to skip directly to next scene.");
        let SKey = this.input.keyboard.addKey('S');
        SKey.on('down', function () 
        {
            this.scene.start('logo');
        }, this);
    }

    update()
    {

    }
}

class Logo extends Phaser.Scene {
    constructor()
    {
        super('logo');
    }

    preload()
    {
        this.load.image('logo', './assets/logo.png');
        this.load.audio('bubbles', './assets/bubbles.mp3');
    }

    create()
    {
        this.cameras.main.fadeIn(750, 0,0,0);
        this.sound.add('bubbles');
        console.log(this.sound.locked);
        this.logo = this.add.image(512, 320, 'logo');
        this.logo.setScale(0.3);
    }

    update()
    {

    }
}

class Gameplay extends Phaser.Scene {
    constructor()
    {
        super('gameplay');
    }

    preload()
    {
        this.load.image('cg1_open', './assets/cg1_open.png');
        this.load.image('cg1_closed', './assets/cg1_closed.png');
        this.load.image('cg2', './assets/cg2.png');
        this.load.audio('submerged', './assets/submerged.wav');
    }

    create()
    {
        this.add.text(50, 50, "this is the gameplay screen");
    }

    update()
    {

    }
}

class Title extends Phaser.Scene {
    constructor()
    {
        super('title');
    }

    preload()
    {
        this.load.image('cg2', './assets/cg2.png');
    }

    create()
    {
        this.add.text(50, 50, "this is the title screen");
    }

    update()
    {

    }
}

let config = {
    type: Phaser.WEBGL,
    parent: 'here',
    width: 1024,
    height: 640,
    scene: [Loading, Logo, Gameplay, Title]
}

let game = new Phaser.Game(config);