let humidité = 0
basic.forever(function () {
    humidité = pins.digitalReadPin(DigitalPin.P0)
    led.plotBarGraph(
    humidité,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(humidité)
    }
})
