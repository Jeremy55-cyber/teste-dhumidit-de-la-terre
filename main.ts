let humidité = 0
basic.forever(function () {
    humidité = pins.digitalReadPin(DigitalPin.P0)
    led.plotBarGraph(
    humidité,
    1023
    )
    basic.showNumber(humidité)
})
