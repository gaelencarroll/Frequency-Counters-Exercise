// add whatever parameters you deem necessary
function pivotIndex(array) {
    let pivot = -1;
    let left = 0;
    let right = array.reduce((a,b) => a+b, 0)
    for(let i = 0; i < array.length; i++){
        left += array[i]
        if(left === right){
            pivot = i
            break
        }
        right -= array[i]
    }
    return pivot
}
