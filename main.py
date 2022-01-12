@namespace
class SpriteKind:
    proplayer = SpriteKind.create()
def apfelEssen(nummer: number):
    global temp_sprite, temp_sprite2
    temp_sprite = sprites.create(img("""
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
        """),
        SpriteKind.food)
    temp_sprite.set_position(randint(3, 157), randint(3, 117))
    info.change_score_by(1)
    temp_sprite2 = sprites.create(img("""
            6 6 6 6 6 
                    6 6 6 6 6 
                    6 6 6 6 6 
                    6 6 6 6 6 
                    6 6 6 6 6
        """),
        SpriteKind.player)
    return temp_sprite
def bewegen():
    if controller.right.is_pressed():
        Schlangenkopf.set_velocity(20, 0)
    if controller.left.is_pressed():
        Schlangenkopf.set_velocity(-20, 0)
    if controller.up.is_pressed():
        Schlangenkopf.set_velocity(0, -20)
    if controller.down.is_pressed():
        Schlangenkopf.set_velocity(0, 20)
def teleport():
    if Schlangenkopf.x <= -5:
        Schlangenkopf.x = 185
    if Schlangenkopf.x >= 186:
        Schlangenkopf.x = -4
temp_sprite2: Sprite = None
temp_sprite: Sprite = None
Schlangenkopf: Sprite = None
schlangenteil1: Sprite = None
mySprite: Sprite = None
list3: List[number] = []
def verfolgen(sprite: Sprite, num: number, list2: List[any]):
    if controller.right.is_pressed():
        schlangenteil1.set_position(Schlangenkopf.x - 5, Schlangenkopf.y)
    if controller.left.is_pressed():
        schlangenteil1.set_position(Schlangenkopf.x + 5, Schlangenkopf.y)
    if controller.up.is_pressed():
        schlangenteil1.set_position(Schlangenkopf.x, Schlangenkopf.y + 5)
    if controller.down.is_pressed():
        schlangenteil1.set_position(Schlangenkopf.x, Schlangenkopf.y - 5)
Schlangenkopf = sprites.create(img("""
        7 7 7 7 7 
            7 7 7 7 7 
            7 7 7 7 7 
            7 7 7 7 7 
            7 7 7 7 7
    """),
    SpriteKind.proplayer)
Schlangenkopf.set_position(80, 60)
schlangenteil1 = sprites.create(img("""
        6 6 6 6 6 
            6 6 6 6 6 
            6 6 6 6 6 
            6 6 6 6 6 
            6 6 6 6 6
    """),
    SpriteKind.player)
schlangenteil1.set_position(60, 60)
apple = sprites.create(img("""
        . . 7 7 . . 
            2 2 7 2 2 . 
            2 2 2 2 2 . 
            2 2 2 2 2 . 
            2 2 2 2 2 . 
            2 2 2 2 2 .
    """),
    SpriteKind.player)
info.set_score(0)
ganzeSchlange = [Schlangenkopf, schlangenteil1]

def on_on_update():
    global apple
    bewegen()
    verfolgen(mySprite, 1, list3)
    if Schlangenkopf.overlaps_with(apple):
        apple.destroy()
        apple = apfelEssen(1)
    teleport()
game.on_update(on_on_update)

