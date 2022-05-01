async function passGen(Length = []) {
    if (!length) return undefined
    
    var length = Length,
        res = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            value = "";
    for (var i = 0, n = res.length; i < length; ++i) {
        value += res.charAt(Math.floor(Math.random() * n));
    }
    return value;
}

module.exports = passGen