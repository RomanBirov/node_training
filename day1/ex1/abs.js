const abs = function moduleNum(num) {
    if (num || num === 0) {
        if (num > 0)
            return num;
        else if (num < 0)
            return -num;
    } else
        return null;
};

module.exports = abs;