radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(0)
    } else if (receivedNumber == 1) {
        basic.showNumber(1)
    } else if (receivedNumber == 2) {
        basic.showNumber(2)
    } else if (receivedNumber == 3) {
        basic.showNumber(3)
    } else if (receivedNumber == 4) {
        basic.showNumber(4)
    } else if (receivedNumber == 5) {
        basic.showNumber(5)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(number)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    number += -1
    basic.showNumber(number)
})
let number = 0
let radio2 = 0
number = 0
radio.setGroup(radio2)
