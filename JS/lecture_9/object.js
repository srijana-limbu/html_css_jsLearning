//different ways to create object
const student = {
    fullName: "Srijana Limbu",
    address: "ktm",
    printAddress: function () {
        console.log("address =", this.address);//student.address
    }
 /* on console  
  student.printAddress()
    app.js:5 address = ktm */
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};
/* on console
employee.calcTax()
app.js:14 tax rate is 10%*/

const krishna = {
    salary: 50000,
};
krishna.__proto__ = employee;
/* krishna.calcTax()
app.js:15 tax rate is 10%*/


const hari = {
    salary: 50000,
};


const ram = {
    salary: 50000,
};


const ram1 = {
    salary: 50000,
};


hari.__proto__ = employee;
ram.__proto__ = employee;
ram1.__proto__ = employee;

/* hari.calcTax()
app.js:15 tax rate is 10% */



const employee1 = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};

const parbati = {
    salary: 80000,
    calcTax() {
        console.log("tax rate is 20%");
    }
};

parbati.__proto__ = employee1;

/* parbati.calcTax()
app.js:63 tax rate is 20% */