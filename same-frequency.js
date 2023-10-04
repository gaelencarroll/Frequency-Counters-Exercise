// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
    let str1 = n1.toString()
    let str2 = n2.toString()

    if(str1.length !== str2.length){
        return false
    }

    let count1 = {}
    let count2 = {}

    for(let i = 0; i < str1.length; i++){
        count1[str1[i]] = (count1[str1[i]] || 0) + 1
    }
    for(let i = 0; i < str2.length; i++){
        count2[str2[i]] = (count2[str2[i]] || 0) + 1
    }
    for(let k in count){
        if(count1[k] !== count2[k]){
            return false
        }
    }
    return true;
}
