function calc(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i] / array.length;

    }
    console.log(sum)
}

function dataType(value) {
    console.log(typeof value)
}
