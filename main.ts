basic.forever(function () {
    if (gamerbit.isPressed(GamerBitPin.P0)) {
        basic.showNumber(1)
    } else if (gamerbit.isPressed(GamerBitPin.P8)) {
        basic.showNumber(2)
    } else if (gamerbit.isPressed(GamerBitPin.P1)) {
        basic.showNumber(3)
    } else if (gamerbit.isPressed(GamerBitPin.P2)) {
        basic.showNumber(4)
    } else if (gamerbit.isPressed(GamerBitPin.P16)) {
        basic.showNumber(5)
    } else if (gamerbit.isPressed(GamerBitPin.P12)) {
        basic.showNumber(6)
    } else if (gamerbit.isPressed(GamerBitPin.P5)) {
        basic.showNumber(7)
    } else if (gamerbit.isPressed(GamerBitPin.P11)) {
        basic.showNumber(8)
    } else {
        basic.showNumber(0)
    }
})
