const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    var num1=0;
    var num2=1;
    var sum;
    for (let i = 1; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
