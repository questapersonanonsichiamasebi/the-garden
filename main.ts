enum RadioMessage {
    message2 = 1435,
    message1 = 49434
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const enemy2 = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const rocket = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar4.value > 0) {
        shoot()
        statusbar4.value += -1
    } else {
        mySprite.say("need more ammo", 500)
    }
})
controller.combos.attachCombo("ba", function () {
    if (statusbar.value > 27) {
        mySprite.startEffect(effects.warmRadial, 200)
        tiles.placeOnRandomTile(mySprite, sprites.castle.rock2)
        statusbar.value += -27
    } else {
        mySprite.say("need more life!", 1000)
    }
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -25
    otherSprite.say("!!!", 100)
    pause(500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -5
    otherSprite.say("ouch!", 200)
    pause(200)
})
function shoot () {
    for (let index = 0; index < 1; index++) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 . . . . . . . . 
            . . . . 6 7 5 9 6 . . . . . . . 
            . . . . 9 5 5 9 6 6 . . . . . . 
            . . . 7 7 5 9 7 9 7 6 . . . . . 
            . . . 6 7 6 9 9 5 5 9 . . . . . 
            . . . . 9 5 5 9 5 7 9 . . . . . 
            . . . . 7 5 5 9 9 9 7 . . . . . 
            . . . . . 7 9 9 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, -21)
        pause(500)
        projectile.follow(mySprite2)
        projectile.follow(mysprite3)
        projectile.follow(mySprite4)
    }
    timer.after(4500, function () {
        projectile.destroy(effects.spray, 100)
    })
}
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -5
    otherSprite.say("ouch!", 200)
    pause(200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    statusbar3.value += -18
    sprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    boss_statusbar.value += -5
    sprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (retroscena >= 99) {
        mySprite.say("too much life!", 1000)
    } else {
        statusbar.value += 25
        otherSprite.destroy(effects.spray, 100)
        music.pewPew.play()
    }
})
function startgame () {
    tiles.setTilemap(tilemap`level`)
    boss_statusbar = statusbars.create(80, 4, StatusBarKind.Health)
    boss_statusbar.setFlag(SpriteFlag.Invisible, true)
    anim = animation.createAnimation(ActionKind.Walking, 1000)
    myMinimap = minimap.minimap()
    statusbar = statusbars.create(30, 4, StatusBarKind.Health)
    mySprite = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
    scene.cameraFollowSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `],
    250,
    true
    )
    minimap.includeSprite(myMinimap, mySprite)
    controller.moveSprite(mySprite, 150, 125)
    statusbar.attachToSprite(mySprite)
    statusbar.setLabel("HP")
    statusbar.setColor(7, 2)
    statusbar.setBarBorder(1, 15)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar4 = statusbars.create(14, 4, StatusBarKind.Energy)
    statusbar4.setColor(8, 12)
    statusbar4.attachToSprite(statusbar)
    statusbar4.setLabel("ammo")
    statusbar4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar4.max = 11
    statusbar4.setBarBorder(1, 15)
    pause(5000)
    music.playMelody("E B C5 A B G A F ", 62)
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdc2112cdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 200), randint(0, 100))
    statusbar.setPosition(0, 0)
    mySprite2.follow(mySprite, 75)
    mysprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdc2112cdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.enemy2)
    mysprite3.setPosition(randint(0, 200), randint(0, 100))
    mysprite3.follow(mySprite, 60)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar3.attachToSprite(mysprite3)
    statusbar3.setColor(7, 2)
    statusbar3.setBarBorder(1, 15)
    statusbar3.setLabel("HP")
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.attachToSprite(mySprite2)
    statusbar2.setColor(7, 2)
    statusbar2.setBarBorder(1, 15)
    statusbar2.setLabel("HP")
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -18
    sprite.destroy(effects.fire, 100)
})
let nextlevel1 = 0
let retroscena2 = 0
let retroscena3 = 0
let mySprite5: Sprite = null
let statusbar2: StatusBarSprite = null
let myMinimap: minimap.Minimap = null
let anim: animation.Animation = null
let retroscena = 0
let boss_statusbar: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let mySprite4: Sprite = null
let mysprite3: Sprite = null
let mySprite2: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let statusbar4: StatusBarSprite = null
game.splash("arrows for move, BA to teleport (it cost  27 life) and A to shoot. Pick cherries to gain life and you get 6 life every 7,50 seconds. good luck and enjoy the game ^_^")
startgame()
game.onUpdateInterval(2000, function () {
    statusbar4.value += 1
})
game.onUpdateInterval(7500, function () {
    statusbar.value += 6
})
forever(function () {
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    mySprite5.setPosition(randint(0, 200), randint(0, 300))
    pause(20000)
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
    retroscena = statusbar.value
    retroscena3 = statusbar3.value
    retroscena2 = statusbar2.value
    if (retroscena2 == 0) {
        mySprite2.destroy()
        nextlevel1 += 1
    }
    if (boss_statusbar.value == 0) {
        mySprite4.destroy()
        game.over(true, effects.confetti)
    }
    if (retroscena == 0) {
        mySprite.destroy()
        game.over(false, effects.dissolve)
    }
    if (retroscena3 == 0) {
        mysprite3.destroy()
        nextlevel1 += 1
    }
    if (nextlevel1 == 2) {
        mySprite4 = sprites.create(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c 1 b b b 1 b c f b c b c c . 
            c c 2 b b b 2 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.boss)
        boss_statusbar.setFlag(SpriteFlag.Invisible, false)
        boss_statusbar.attachToSprite(mySprite4)
        boss_statusbar.setColor(7, 2)
        boss_statusbar.setBarBorder(1, 15)
        boss_statusbar.setLabel("HP")
        boss_statusbar.setFlag(SpriteFlag.Invisible, false)
        mySprite4.follow(mySprite, 90)
    }
})
