//1)
let array = [4, 3, 2 ]
let i = 0
while (array[i] || array[i] === 0) {
    i++
}
console.log(i)


//2)
let array = [1, 2, 3, 4]
let result = 0
for (let i = 0; i < array.length; i++) {
    result += array[i]
}
console.log(result)


//3)
function powBetween(a, b) {
    if(a < 1) {
     console.log(1)   
    }
    for(let i = 2; i < b; i *= 2) {
        if (i > a && i < b) {
            console.log(i)
        }
    }
}
powBetween(-10, 240) 


//4)
function dash(number){
    let str = "" + number
    let result = ""
    for(let i = 0; i < str.length; i++){
        if(i === str.length - 1){
            result += str[i]
        } else if ( !(str[i] % 2) && !(str[i + 1] % 2)) {
            result += str[i] + "-"
        } else {
            result += str[i]
        } 
    }
    return console.log(result)
}
dash(42)


//5)
function prime(num) {
    let array = []
    let j = 0
    let newArr = []
    for(let i = 2; i  < 100; i++){
        if (i === 2) {
            array[j] = i
        } else if (i === 3) {
            array[j] = i
        } else if (i === 5) {
            array[j] = i
        } else if (i === 7) {
            array[j] = i
        } else if(i % 2 && i % 3 && i % 5 && i % 7){
            array[j] = i
        } else {
            false
        }
        j++
    }
    for (let i = 0; i < array.length ; i++) {
        if(array[i]) {
            newArr.push(array[i])
        }
    }
    console.log(newArr[num-1])
}
prime(3)
