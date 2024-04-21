input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
    basic.pause(2000)
})
