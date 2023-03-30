let arr = [1,2,3,4,45]
let  array =[]
let number = +prompt("Chọn phần tử để xoá :")
function tryRemoveFromArray(){
    for (let i = 0; i < arr.length; i++){
        if (number < arr.length){
            for (let j = 0; j < arr.length; j++){
                array.push(arr[j])
            }
            for (let x = number + 1; x < arr.length; x++){
                array.push(arr[x])
            }
            return array
        }else {
            return arr
        }
    }
}
alert("kết quả là :"+ tryRemoveFromArray(arr,number))