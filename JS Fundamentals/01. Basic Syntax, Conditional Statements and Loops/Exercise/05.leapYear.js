function leapYear(year) {
    if (year % 4 === 0 && year % 100 != 0) {
        console.log("yes")
    } else if (year % 400 === 0) {
        console.log("yes")
    } else {
        console.log("no")
    }

}

leapYear(1984);
//YES
leapYear(2003);
//NO
leapYear(4);
//YES