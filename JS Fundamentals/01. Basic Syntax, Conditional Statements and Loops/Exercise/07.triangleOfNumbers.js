function triangleOfNumbers(n) {

let rolls = n;
for (let i = 1; i <= n; i++) {
    let printLine = "";
    for (u = 1; u <= i; u++) {
        
        printLine += `${i} `;
    
    }
    console.log(printLine)
}
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);