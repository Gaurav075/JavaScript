// const tinderuser = new object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sakshi"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser ={
    email: "gupta@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Gaurav",
            lastname : "Gupta"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)

// const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
console.log(users[1].email)
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLogged'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"gaurav"
}

// course.courseInstructor

const{courseInstructor:instructor}=course
console.log(instructor);

// {
//     "name" : "hitesh"
//     "coursename" : "js in hindi"
//     "price" : "free"
// }

[
    {},
    {},
    {}
]
