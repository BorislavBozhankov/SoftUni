function vacation(numberOfPeople, typeOfGroup, dayOfTheWeek) {
    let totalPrice = 0;
    let discount = 0;
    let price = 0;
    let numberOfPeopleStay = 0;
        if (dayOfTheWeek == "Friday") {
        switch (typeOfGroup) {
            case "Students": price = 8.45; break;
            case "Business": price = 10.90; break;
            case "Regular": price = 15; break;
        }
    } else if (dayOfTheWeek == "Saturday") {
        switch (typeOfGroup) {
            case "Students": price = 9.80; break;
            case "Business": price = 15.60; break;
            case "Regular": price = 20; break;
        }
    } else if (dayOfTheWeek == "Sunday") {
        switch (typeOfGroup) {
            case "Students": price = 10.46; break;
            case "Business": price = 16; break;
            case "Regular": price = 22.50; break;
        }
    }
    numberOfPeopleStay = numberOfPeople;
      if (typeOfGroup == "Students" && numberOfPeople >= 30) {
        discount = 0.15;        
    } else if (typeOfGroup == "Business" && numberOfPeople >= 100) {
        numberOfPeopleStay = numberOfPeople - 10;
    } else if (typeOfGroup == "Regular" && numberOfPeople >= 10 && numberOfPeople <=20) {
        discount = 0.05;        
    }
    totalPrice = numberOfPeopleStay * price * (1 - discount)

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday");