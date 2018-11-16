// #Question 6 
// ##What are the results of these splice and slice methods
// briefly explain the results in your own words

/*
let a = ['zero', 'one', 'two', 'three'];
let names = ['jason', 'john', 'peter', 'karen'];

let sliced = a.slice(1, 3);
let spliced = names.splice(1,3);
*/

/*
Answers:

 variable sliced will be equale to sring ['one', 'two'];

 variable spliced will be equale to string ['john', 'peter', 'karen']
*/

//playGround:

let names = ['jason', 'john', 'peter', 'karen'];

let sliced = names.slice(1, 3);
let spliced = names.splice(1,3);

console.log('sliced = ' + sliced)
console.log('spliced = ' + spliced)

