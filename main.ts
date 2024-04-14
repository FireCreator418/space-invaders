controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`0090010408010107001c00020a006400f401640000040000000000000000000000000000000003070000000400022427`), music.PlaybackMode.UntilDone)
    Bullet = sprites.create(img`
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        7 7 
        `, SpriteKind.Projectile)
    Bullet.setPosition(Ship.x, Ship.y)
    Bullet.setVelocity(0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
let Space_invader: Sprite = null
let Bullet: Sprite = null
let Ship: Sprite = null
Ship = sprites.create(img`
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
Ship.setPosition(70, 103)
Ship.setStayInScreen(true)
controller.moveSprite(Ship, 100, 0)
game.onUpdateInterval(5000, function () {
    Space_invader = sprites.create(img`
        . . 7 . . . . . 7 . . 
        . . . 7 . . . 7 . . . 
        . . 7 7 7 7 7 7 7 . . 
        . 7 7 f 7 7 7 f 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 
        7 . 7 . . . . . 7 . 7 
        7 . . 7 . . . 7 . . 7 
        `, SpriteKind.Enemy)
    Space_invader.setPosition(randint(0, 50), 10)
})
