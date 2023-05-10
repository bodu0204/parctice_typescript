"use strict";
for (let i = 1; i < 100; i++) {
    switch (Number(!(i % 3)) | Number(!(i % 5)) << 1) {
        case 0b01:
            console.log("Fizz");
            break;
        case 0b10:
            console.log("Buzz");
            break;
        case 0b11:
            console.log("FizzBuzz");
            break;
        default:
            console.log(i);
            break;
    }
}
