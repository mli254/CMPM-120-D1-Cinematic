class Loading extends Phaser.Scene {
    constructor()
    {
        super('loading');
    }

    preload()
    {

    }

    create()
    {
        this.add.text(50, 50, "this is the loading screen");
        this.input.on('pointerdown', () => this.scene.start('logo'));
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
        this.add.text(50, 50, "this is the logo screen");
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
    width: 1000,
    height: 580,
    scene: [Loading, Logo, Gameplay, Title]
}

let game = new Phaser.Game(config);