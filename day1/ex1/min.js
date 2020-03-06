const min = function minNumInArr(numArr) {
    let minNum = numArr[0];
    let i = -1;
    if (numArr && numArr.length != 0) {
        while (numArr[++i]) {
            if (minNum > numArr[i])
                minNum = numArr[i];
        }
        return minNum;
    } else
        return  null;
};

module.exports = min;