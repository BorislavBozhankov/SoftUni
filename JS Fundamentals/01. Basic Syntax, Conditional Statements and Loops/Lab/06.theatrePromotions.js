function theatrePromotions(type, age) {
    let price = 0;
    if (age < 0 || age > 122) {
        console.log("Error!");
    } else {
        switch (type) {
            case "Weekday" : 
            if (age <= 18 ) {
                price = 12;
            } else if (age <= 64) {
                    price = 18;
                } else {
                    price = 12;
                }
            ; break;
            case "Weekend": 
            if (age <= 18 ) {
                price = 15;
            } else 
                if (age <= 64) {
                    price = 20;
                } else {
                    price = 15;
                }
            ; break;
            case "Holiday": 
            if (age <= 18 ) {
                price = 5;
            } else if (age <= 64) {
                    price = 12;
                } else {
                    price = 10;
                }
            ; break;
        }
        console.log(`${price}$`)
    }
}

theatrePromotions('Weekday', 42)
// 18
theatrePromotions('Holiday', -12)
// Error!
theatrePromotions('Holiday', 15)
//5