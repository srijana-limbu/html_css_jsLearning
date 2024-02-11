//array methods
//push()
// let colors = ['purple', 'white', 'blue'];

// colors.push('red', 'black');
// console.log(colors);

//pop()
// let colors = ['purple', 'white', 'blue', 'green'];
// console.log(colors);
// let deletedColors = colors.pop('green');
// console.log(colors);
// console.log("deleted: ", deletedColors);


//toString() >> converts array to string
// let colors = ['purple', 'white', 'blue', 'green'];
// console.log(colors.toString());

//let numb = ['6', '11', '21'];
// console.log(numb.toString());

//concat()
// let c1 = ['white', 'moon'];
// let c2 = ['sun', 'black'];

// let c = c1.concat(c2);
// console.log(c);

//unshift() >>add to start
// let colors = ['purple', 'white', 'blue'];
// let sm = colors.unshift('red', 'black');
// console.log(sm);//Array ["red", "balck", "purple", "white", "blue"]


//shift() >> delete from start and return
// let colors = ['gray', 'purple', 'white', 'blue'];
// let sm = colors.shift();
// console.log("deleted: ", sm);// "deleted: " "gray"

//slice() >>returns the piece of the array
// let colors = ['purple', 'white', 'blue', 'yellow', 'green', 'brown'];
// console.log(colors.slice(0,2));//> Array ["purple", "white"]

//splice() >>change the original array (add, remove, replace)
// let flowers = ['hydrangea', 'lavender', 'lily', 'daisy', 'sunflower', 'tulip'];
// console.log( flowers.splice(4, 2));//delete element
// console.log( flowers);

// output: ^__^
// > Array ["sunflower", "tulip"]
// > Array ["hydrangea", "lavender", "lily", "daisy"]


// console.log( flowers.splice(4, 2, 11 , 01));//replace element
// console.log( flowers);//> Array ["hydrangea", "lavender", "lily", "daisy", 11, 1]


// console.log( flowers.splice(1, 0, 'rose', 'Peony','Camellia', 'Lilac', 'Amaryllis', 'Larkspur', 'Magnolia', 'Cornflower', 'Honeysuckle', 'Valerian', 'White Jasmine', 'Red Carnations'));
// console.log( flowers);//add element

//output:^__^
//array ["hydrangea", "rose", "Peony", "Camellia", "Lilac", "Amaryllis", "Larkspur", "Magnolia", "Cornflower", "Honeysuckle", "Valerian", "White Jasmine", "Red Carnations", "lavender", "lily", "daisy", "sunflower", "tulip"]