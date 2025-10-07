let arr = ['a', 'a1', 'b', 'd']
let b = 'a1'

function addItem(val) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) == val.charAt(0)) {
            newArr.push(arr[i])
        }
    }
    if (newArr.length >= 1) {
        console.log();
        // arr.push(val.charAt(0) + (Number(val.charAt(1)) + newArr.length))
    }

}

addItem(b)
console.log(arr);

