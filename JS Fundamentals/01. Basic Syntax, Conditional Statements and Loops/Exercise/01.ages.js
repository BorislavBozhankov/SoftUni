function ages(age) {
    let result;
    if (age < 0) {
        result = "out of bounds";
    } else if (age >= 0 && age <= 2) {
        result = "baby";
    } else if (age >= 3 && age <= 13) {
        result = "child";
    } else if (age >= 14 && age <= 19) {
        result = "teenager";
    } else if (age >= 20 && age <= 65) {
        result = "adult";
    } else {
        result = "elder";
    }
    console.log(result)
}

ages(20);
//adult
ages(1);
//baby
ages(100);
//elder
ages(-1);
//out of bounds
