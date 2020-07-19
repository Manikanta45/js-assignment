const student = {
    name:"Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using Javascript"
    }
}

//destructuring 
let {name , age , projects} = student;
console.log(name , age , projects.diceGame)



//normal way 
console.log(student.name);
console.log(student.age);
console.log(student.projects.diceGame);