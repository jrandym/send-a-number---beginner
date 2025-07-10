radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
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
