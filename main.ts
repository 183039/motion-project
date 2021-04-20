namespace SpriteKind {
    export const bird = SpriteKind.create()
}
sprites.onCreated(SpriteKind.bird, function (sprite) {
    sprite.y = 0
    sprite.x = randint(10, 150)
    sprite.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bird, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let mySprite: Sprite = null
let plane = sprites.create(img`
    ........ffffff.........
    .......ff1111ff........
    .......f199991f........
    .......f111111f........
    .......f911119f........
    .......f111111f........
    .......f911119f........
    ......ff111111ff.......
    ....fff19111191fff.....
    ..fff111111111111fff...
    .ff1111191111911111ff..
    .f111111111111111111f..
    .f111111911119111111f..
    .fffffff111111fffffff..
    .......f911119f........
    .......f111111f........
    .......f911119f........
    .......f111111f........
    .......f111111f........
    .......ff1111ff........
    ........f1111f.........
    ........ff11ff.........
    .........ffff..........
    `, SpriteKind.Player)
plane.y = 100
scene.setBackgroundColor(9)
info.setLife(3)
info.setScore(0)
controller.moveSprite(plane, 100, 0)
plane.setStayInScreen(true)
forever(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f f . . . f . 
        . f . . . . f f f f f . f f f . 
        . f f f . f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bird)
    pause(1000)
})
