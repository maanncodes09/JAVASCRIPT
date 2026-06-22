const myDate= new Date()
console.log(myDate); //2026-06-22T16:25:59.693Z
console.log(myDate.toString()); //Mon Jun 22 2026 16:29:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon Jun 22 2026
console.log(myDate.toLocaleDateString()); // 6/22/2026
console.log(myDate.toISOString()); //2026-06-22T16:29:31.628Z
console.log(myDate.toJSON()); //2026-06-22T16:29:31.628Z
console.log(typeof myDate); //object

let myCreatedDate= new Date(2026,0,22) 
console.log(myCreatedDate.toDateString()); //Thu Jan 22 2026, so month is starting from 0 in array format
let sdate= new Date("2026-06-22");
console.log(sdate.toLocaleString()); //6/22/2026, 12:00:00 AM, jab date "" meii likhte h , 1 se start hote h month

let myTimeStamp= Date.now()
console.log(myTimeStamp); //1782146626020
console.log(myCreatedDate.getTime()); //1769040000000 both are good for comparison in projects like hotel booking
const nwDate= new Date()
console.log(nwDate.getMonth()); //5
console.log(nwDate.getDay()); //1
console.log(nwDate.getDate()); //22

// newDate.toLocaleString('default',{
//     weekday: "long",
//     timeZone: 
// })