class Loading extends Phaser.Scene {
    constructor()
    {
        super('loading');
    }

    preload()
    {
        this.load.image('loading', './assets/loading.png');
        this.load.image('logo', './assets/logo.png');
        this.load.audio('bubbles', './assets/bubbles.mp3');        
        this.load.image('cg1_open', './assets/cg1_open.png');
        this.load.image('cg1_closed', './assets/cg1_closed.png');
        this.load.image('cg2', './assets/cg2.png');
        this.load.audio('submerged', './assets/submerged.wav');

        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
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

        this.time.delayedCall(5000, () => {
            this.input.on('pointerdown', function () 
            {
                this.cameras.main.fadeOut(1000, 0,0,0);
                this.time.delayedCall(1001, () => {
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

    }

    create()
    {
        this.cameras.main.fadeIn(750, 0,0,0);
        this.bubblesfx = this.sound.add('bubbles');
        this.bubblesfx.play();
        this.logo = this.add.image(512, 290, 'logo');
        this.logo.setScale(0.3);

        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1001, () => {
                this.scene.start('gameplay');
            })
    })

        let SKey = this.input.keyboard.addKey('S');
        SKey.on('down', function () 
        {
            this.scene.start('gameplay');
        }, this);
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

    }

    create()
    {
        this.cameras.main.fadeIn(750, 0,0,0);
        
        this.underwater = this.sound.add('submerged', {loop: true});
        this.underwater.play();

        this.cg1_closed = this.add.image(512, 290, 'cg1_closed');
        this.cg1_closed.setScale(0.4);

        this.cg1_open = this.add.image(512, 290, 'cg1_open');
        this.cg1_open.setScale(0.4);
        this.cg1_open.alpha = 0;

        this.time.delayedCall(2000, () => {
            this.add.tween({
                targets: this.cg1_closed,
                alpha: {from: 1, to: 0},
                duration: 750
            });
        })
        this.time.delayedCall(2000, () => {
            this.add.tween({
                targets: this.cg1_open,
                alpha: {from: 0, to: 1},
                duration: 750
            });
        })

        this.time.delayedCall(4500, () => {
            this.add.tween({
                targets: this.cg1_open,
                alpha: {from: 1, to: 0},
                duration: 500
            });
        })

        this.cg2 = this.add.image(512, 320, 'cg2');
        this.cg2.setScale(0.5);
        this.cg2.alpha = 0;

        this.time.delayedCall(4500, () => {
            this.add.tween({
                targets: this.cg2,
                alpha: {from: 0, to: 1},
                duration: 750
            });
        })

        this.time.delayedCall(7000, () => {
            this.scene.start('title');
        })

        let SKey = this.input.keyboard.addKey('S');
        SKey.on('down', function () 
        {
            this.scene.start('title');
        }, this);
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

    }

    create()
    {
        this.cameras.main.fadeIn(750, 0,0,0);
        this.titleimg = this.add.image(800, 320, 'cg2');
        this.titleimg.setScale(0.5);

        this.title1 = this.add.text(50, 50, "Hello", 
        {
            fontSize: "48px",
            fontFamily: '"Press Start 2P"',
            color: "#7d958c",
            align: 'center',
            lineSpacing: 25
        });

        this.title1 = this.add.text(75, 110, "to the", 
        {
            fontSize: "24px",
            fontFamily: '"Press Start 2P"',
            color: "#7d958c",
            align: 'center',
            lineSpacing: 25
        });

        this.title1 = this.add.text(100, 145, "Deep", 
        {
            fontSize: "48px",
            fontFamily: '"Press Start 2P"',
            color: "#7d958c",
            align: 'center',
            lineSpacing: 25
        });
        
        this.options = this.add.text(100, 320, "Continue\nNew Game\nOptions\nHelp", 
        {
            fontSize: "18px",
            fontFamily: '"Press Start 2P"',
            color: "#ffffff",
            lineSpacing: 25
        });
    }

    update()
    {

    }
}

let config = {
    type: Phaser.WEBGL,
    parent: 'here',
    width: 1024,
    height: 580,
    scene: [Loading, Logo, Gameplay, Title]
}

let game = new Phaser.Game(config);