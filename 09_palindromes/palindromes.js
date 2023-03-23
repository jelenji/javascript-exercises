const palindromes = function (string) {

    let noPunc = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //remove punctiation for string
    noPunc = noPunc.replaceAll(' ', '').toLowerCase();

    console.log(noPunc);

    return [...noPunc].reverse().join("") === noPunc ? true : false; // spread string reverse and compare 
};

// Do not edit below this line
module.exports = palindromes;
