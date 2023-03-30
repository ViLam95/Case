let temp;
let array = [11,9,10,5,7,8];
for (let i = 0; i < array.length; i++) {
    for(let j = i+1; j < array.length; j++) {
        if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
} alert("max thứ "+ 3 + " là " +array[array.length-3])