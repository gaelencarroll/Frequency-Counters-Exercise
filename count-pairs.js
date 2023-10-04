// add whatever parameters you deem necessary
function countPairs(array, n) {
    array.sort((a,b) =>  a-b)
    let count = 0;
    let left = 0;
    let right = array.length-1
    while(left < right){
        let sum = array[left] + array[right]
        if(sum === n){
            count++
            left++
            right--
        }else if(sum < n){
            start++
        }else{
            end--
        }
    }
    return count;

}
