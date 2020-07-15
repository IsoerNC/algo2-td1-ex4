input.onButtonPressed(Button.A, function () {
    if (horiz > 0) {
        led.unplot(horiz, vert)
        horiz += -1
        led.plot(horiz, vert)
    } else if (horiz == 0 && vert == 0) {
        led.unplot(horiz, vert)
        horiz = 4
        vert = 4
        led.plot(horiz, vert)
    } else {
        led.unplot(horiz, vert)
        vert += -1
        horiz = 4
        led.plot(horiz, vert)
    }
})
input.onButtonPressed(Button.B, function () {
    if (horiz < 4) {
        led.unplot(horiz, vert)
        horiz += 1
        led.plot(horiz, vert)
    } else if (horiz == 4 && vert == 4) {
        led.unplot(horiz, vert)
        horiz = 0
        vert = 0
        led.plot(horiz, vert)
    } else {
        led.unplot(horiz, vert)
        vert += 1
        horiz = 0
        led.plot(horiz, vert)
    }
})
let horiz = 0
let vert = 0
vert = 2
horiz = 2
led.plot(horiz, vert)
