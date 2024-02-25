let data = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(" data = ", data);

    }
}

let std = new User("srijana", "limbu.sr11@gmail.com");
 
/* std
User {name: 'srijana', email: 'limbu.sr11@gmail.com'}
email: "limbu.sr11@gmail.com"
name: "srijana"
[[Prototype]]: Object
constructor: class User
viewData: ƒ viewData()
[[Prototype]]: Object */

/* std.viewData()
 data =  secret information */

 class Admin extends User {
    constructor(name, email) {
        super(name, email);

    }
    editData() {
        data = "new value";
    }
 }
 let adminObj = new Admin("admin", "admin22@college.com");

 /* adminobj
Admin {name: 'admin', email: 'admin22@college.com'}
email
: 
"admin22@college.com"
name
: 
"admin"
[[Prototype]]
: 
User */

/*  */