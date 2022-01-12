namespace SpriteKind {
    export const proplayer = SpriteKind.create()
}
function apfelEssen (nummer: number) {
    temp_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . 2 2 7 2 2 . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    temp_sprite.setPosition(randint(3, 157), randint(3, 117))
    info.changeScoreBy(1)
    temp_sprite2 = sprites.create(img`
        6 6 6 6 6 
        6 6 6 6 6 
        6 6 6 6 6 
        6 6 6 6 6 
        6 6 6 6 6 
        `, SpriteKind.Player)
    return temp_sprite
}
function bewegen () {
    if (controller.right.isPressed()) {
        Schlangenkopf.setVelocity(20, 0)
    }
    if (controller.left.isPressed()) {
        Schlangenkopf.setVelocity(-20, 0)
    }
    if (controller.up.isPressed()) {
        Schlangenkopf.setVelocity(0, -20)
    }
    if (controller.down.isPressed()) {
        Schlangenkopf.setVelocity(0, 20)
    }
}
function teleport () {
    if (Schlangenkopf.x <= -5) {
        Schlangenkopf.x = 185
    }
    if (Schlangenkopf.x >= 186) {
        Schlangenkopf.x = -4
    }
}
let temp_sprite2: Sprite = null
let temp_sprite: Sprite = null
let list3 : number[] = []
let mySprite : Sprite = null
let schlangenteil1 : Sprite = null
let Schlangenkopf : Sprite = null
function verfolgen(sprite: Sprite, num: number, list2: any[]) {
    if (controller.right.isPressed()) {
        schlangenteil1.setPosition(Schlangenkopf.x - 5, Schlangenkopf.y)
    }
    
    if (controller.left.isPressed()) {
        schlangenteil1.setPosition(Schlangenkopf.x + 5, Schlangenkopf.y)
    }
    
    if (controller.up.isPressed()) {
        schlangenteil1.setPosition(Schlangenkopf.x, Schlangenkopf.y + 5)
    }
    
    if (controller.down.isPressed()) {
        schlangenteil1.setPosition(Schlangenkopf.x, Schlangenkopf.y - 5)
    }
    
}
Schlangenkopf = sprites.create(img`
    7 7 7 7 7 
    7 7 7 7 7 
    7 7 7 7 7 
    7 7 7 7 7 
    7 7 7 7 7 
    `, SpriteKind.proplayer)
Schlangenkopf.setPosition(80, 60)
schlangenteil1 = sprites.create(img`
    6 6 6 6 6 
    6 6 6 6 6 
    6 6 6 6 6 
    6 6 6 6 6 
    6 6 6 6 6 
    `, SpriteKind.Player)
schlangenteil1.setPosition(60, 60)
let apple = sprites.create(img`
    . . 7 7 . . 
    2 2 7 2 2 . 
    2 2 2 2 2 . 
    2 2 2 2 2 . 
    2 2 2 2 2 . 
    2 2 2 2 2 . 
    `, SpriteKind.Player)
info.setScore(0)
let ganzeSchlange = [Schlangenkopf, schlangenteil1]
game.onUpdate(function () {
    bewegen()
    verfolgen(mySprite, 1, list3)
if (Schlangenkopf.overlapsWith(apple)) {
        apple.destroy()
        apple = apfelEssen(1)
    }
    teleport()
})
