// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const msgFreq = {}
    const letFreq = {}
    for(let l of letters){
        letFreq[l] = ++letFreq[l] || 1;
    }
    for(let m of msg){
        msgFreq[m] = ++msgFreq[m] || 1;
    }
    for(let m in msgFreq){
        if(!letFreq[m]){
            return false
        }
        if(msgFreq[m] > letFreq[m]){
            return false
        }
    }
    return true;
}
