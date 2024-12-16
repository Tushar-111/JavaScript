// how to create singleton object 
// and how to decalre object using constructor

//const tinderUser = new Object() - object declare (singleton object )

// const tinderUser = {}  // - this is also an object declaration (non - singleton object)

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // true
// console.log(tinderUser.hasOwnProperty('isLogged')) // false

// take object inside of objects

// const regularuser={             // regularuser - is also an Object
//     email : "some@gmail.com",
//     fullname : {                // fullname - is also an object that conatin object userFullName.
//         userFullName:   {          // userFullName - itself is an object
//             name : "Tushar savant"
//         }
//     }
// }

//console.log(regularuser.fullname.userFullName.name);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({} , obj1, obj2) // obj3 is the new object that contains all the properties of obj1 and obj
// {} -  reason behind this is  - it's acts like a target and remaining all are source
// all source object will be merged into target object (here empty {} object)
// if we don't declare {} there then all all will get merged into obj1 
// console.log(obj3);

// const obj3 = {...obj1 , ...obj2} - use spreading of object
// console.log(obj3);

// const users = [ 
//     { 
//         id:1,
//         email:"tushar@gmail.com"
//     }
// ]
// console.log(users[0]);

                    // Destructuring of Object // 
// instead of writing courseInstructor 100 time give then a nick name like master
// const course = {
//     coursename: "Spring boot",
//     price:"11000",
//     courseInstructor:"Natraj sir"
// }

// const {courseInstructor : master} = course
// console.log(courseInstructor) - also works instead of course.courseInstructor is master is not mentioned
// console.log(master)

// {
//     "name": "Tushar Savant",
//     "courseName" : "Spring boot",
//     "price" : 7000
// }







