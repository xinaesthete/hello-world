input.onButtonPressed(Button.A, function () {
    music.ringTone(randint(131, 988))
})
let a = 0
let freq = 0
let dt = 0
let phase = 0
let t = input.runningTime()
music.ringTone(131)
basic.forever(function () {
    dt = input.runningTime() - t
    freq = Math.map(input.acceleration(Dimension.Z), -1024, 1024, 0.1, 10)
    phase += freq * (dt / 3142)
    t = input.runningTime()
    a = Math.abs(Math.sin(phase)) ** 100
    music.setVolume(a * 127)
    led.plotBarGraph(
    a,
    1.2
    )
})
