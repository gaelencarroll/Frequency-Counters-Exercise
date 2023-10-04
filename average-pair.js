// add whatever parameters you deem necessary
function averagePair(array,n) {
    let left = 0;
    let right = array.length-1;
    while(left < right){
        let avg = (array[left] + array[right]/2)
        if(avg === n){
            return true
        }else if(avg<n){
            left++;
        }else{
            right++;
        }
    }
    return false;
}
