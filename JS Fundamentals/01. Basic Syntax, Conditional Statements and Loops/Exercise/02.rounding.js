function rounding(number, precision) {
    let result;
    if (precision > 15) {
        precision = 15
    }
    result = number.toFixed(precision)
    console.log(parseFloat(result))
    
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);