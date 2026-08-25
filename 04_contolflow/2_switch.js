// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month=5
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feburary")
        break;
    case 3:
        console.log("March") //March April, break ko agar hata dia toh
        //break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May") //May default case match
        //break;

    default:
        console.log("default case match")
        break;
}