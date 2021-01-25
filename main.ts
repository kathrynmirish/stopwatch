let start = 0
let pages_read = 0
input.onButtonPressed(Button.A, function () {
    serial.writeLine("start of reading session")
    start = input.runningTime()
    pages_read = 0
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("end of reading session, pages read this session")
    serial.writeLine("" + (pages_read))
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("" + (input.runningTime() - start))
    start = input.runningTime()
    pages_read = pages_read + 1
})
