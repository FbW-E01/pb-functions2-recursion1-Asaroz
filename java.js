const array = [1, 2, 3, 4, 5, 6]
console.log(sum(array))

function sum(array, helper = 0) {
    if (array.length === 0) {
        return helper
    }
    [current, ...rest] = array
    console.log(array.lenght)
    helper += current
    return sum(rest, helper)
}