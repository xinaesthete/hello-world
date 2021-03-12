let freq = 0
let dt = 0
let phase = 0
let t = input.runningTime()
basic.forever(function () {
    dt = input.runningTime() - t
    freq = Math.map(input.acceleration(Dimension.Z), -1023, 1023, 0.1, 4)
    phase += freq * (dt / 3142)
    t = input.runningTime()
    led.plotBarGraph(
    Math.abs(Math.sin(phase)),
    1.2
    )
})
