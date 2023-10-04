// add whatever parameters you deem necessary
function longestFall(array) {
    let counter = 1;
    let max = 0;
    if(array.length === 0){
        return 0;
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < array[i-1]){
            counter++
            max = Math.max(max, counter)
        }else{
            counter = 1
        }
    }
    return max
}
