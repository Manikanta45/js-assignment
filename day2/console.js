console.time('time taken');
console.log("Hi welcome");
console.warn("warning occured");
console.error("an error occured");
var a ={ name:"Manikanta", age :"21", city: "chennai"}
var b ={ name:"rajeev", age :"23", city: "bangalore"}
var c ={ name:"pavan", age :"26", city: "vizag"}
console.log(a);
console.log(b);
console.log(c);
console.table({a,b,c})
console.log({a,b,c})
console.log('%c custom message','color:green;')
console.timeEnd('time taken');