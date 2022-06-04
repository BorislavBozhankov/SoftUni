function printAndSum(startNumber, endNumber) {
    let totalSum = 0;
        for (i = startNumber; i === endNumber; i++) {
        console.log(i);
        totalSum += i;
    }
    console.log(totalSum)
console.log(`Sum: $(totalSum)`)
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
