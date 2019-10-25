function main(str, str2) {
    let isDiff = 0;
    for(let i=0 ; i<str.length ; i++){
        // if(str[i] !== str2[i]) {
        //     isDiff += 1;
        // }
        str[i] !== str2[i] ? isDiff++ : null;
    }
    return isDiff;
}

module.exports = { main };
