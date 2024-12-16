// Object literals  - Singleton -- via constructor 
// Object.create

const sym = Symbol("Key1")

const JsUser={
    name:"Tushar",    // name is just like string that is = "name"
    [sym]:"myKey1",
    age:21,
    location:"Pune",
    email:"tush@gmail.com",
    lastLoginDays:["Monday" , "Saturday"]

}

// 2 ways to access data memmber of object
// console.log(JsUser.email);
//console.log(JsUser["email"])

// we can;t handle symbole and key is defined by " " with .(dot) operator
// " full_name" : "Tushar Savant"
// jsUser["full_name"] - this is how we have access it

// console.log(JsUser.sym)  //  here actual sym value is not render as output
//for that

//console.log(JsUser[sym])

// we can override values
//JsUser,email = "sae@gmail.com"

// if we freeze the object the we  can;t ovverride anything on object data member
// Object.freeze(JsUser);

//console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello , How are you ?");
// }
//console.log(JsUser.greeting)  // - here just reference of the function is return backed -(function is not executed)

JsUser.greetingTwo = function(){
    // string interpolation is done here using - ``  
    console.log(`Hello JS user, ${this.name} `);
}
console.log(JsUser.greetingTwo());


