class user
{
    constructor(name,age,mail)
    {
        this.name=name;
        this.age=age;
        this.mail=mail;
        this.lucoins=0;
        this.courses=[];
    }
    login()
    {
        console.log(`${this.name} has logged in`);
        return this;
    }

    logout()
    {
        console.log(`${this.name} has logged out`);
        return this;
    }
}
    

class Moderator extends user
{
    // constructor(name,age,mail)
    // {
    //     super(name,age,mail);
    //     this.role='Moderator';
    // }

    addCoins(username)
    {
        this.name=username;
        this.lucoins++;
        console.log(`Moderator added lucoins to ${this.name}`)
        return this.lucoins;
    }
    removeCoins(username)
    {
       
            this.name=username;
            this.lucoins--;
            console.log(`Moderator removed lucoins to ${this.name}`)
            return this.lucoins;
        
    }
 // deleteuser(user)
    // {
    //     users=users.filter(u=>{
    //         return  u.mail != user.mail
    //     })
    // }
}
class Admin extends Moderator {
    addCourse(user, course) {
        user.courses.push(course);
        console.log(`Admin added ${course} course to ${user.name}.`);
        return user.courses;
    }
    removeCourse(user, course){
        // delete user.courses;
        for(let i = 0; i < user.courses.length ; i++){
            if(course === user.courses[i]){
                 user.courses.splice(i,1);
            }
        }
        console.log(`Admin removed ${course} course from ${user.name}.`);
        console.log(`Remaining Course(s) of ${user.name}: ${user.courses}`)
        return user.courses;
    }
}



let dot=new user('Manikanta','20','manikanta@gmail.com')
let user1=new user('Vinay','21','vinay@gmail.com')
let mod=new Moderator('rio','23','rio@gmail.com')
let admin=new Admin('denver','36','den@gmail.com')

console.log(dot,user1,mod,admin);
dot.lucoins= mod.addCoins(dot.name);
dot.lucoins=mod.removeCoins(dot.name);
console.log(dot);

user1.courses=admin.addCourse(user1,'python')
user1.courses=admin.addCourse(user1,'java');
user1.courses=admin.removeCourse(user1,'js')

dot.courses=admin.addCourse(dot,'python')
dot.courses=admin.addCourse(dot,'java');
dot.courses=admin.removeCourse(dot,'js')
