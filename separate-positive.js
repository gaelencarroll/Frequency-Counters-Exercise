// add whatever parameters you deem necessary
function separatePositive(array) {
    let left = 0;
    let right = array.length-1
    while(left < right){
        if(array[left] < 0 && array[right] > 0){
            [array[left], array[right]] = [array[right], array[left]]
            left++
            right--
        }
        else{
            if(array[left] > 0){
                left++
            }
            else{
                right--
            }
        }
    }
    return array
}
