// there are two ways define a function
//1. Classical

// 1. old way 1995 - 2015

function aFunction(){
    console.log("hii my name is function");

    //function body
    // Every function return something
}

// Call / invoke
aFunction();

//2. Fat arrow functions
// define
var bFunction=()=>{
    console.log('New Function');
}

// invoke / call
bFunction();

// Define 
function cFunction(){
    console.log("hii is cfunction");
}

// Call / invoke
cFunction();

// Define 

let dFunction = () =>{
    console.log('dFunction');

    // function body
}

// invoke / call 
dFunction();

// define 

function eFunction(){
    console.log("eDefination");
}

//invoke / call
eFunction();

// Define
const fFunction = () =>{
    console.log('fFunction');

    // function body
}

// invoke / call 
fFunction();

// Define 
function gFunction(){
    console.log(`gFunction`);
}

// invoke 
gFunction();

//Define 
var hFunction = () =>{
    console.log("hFunction");
}

// invoke 
hFunction();

// A function defination can be assigned to variable
// Define 
let i = function iFunction(){
    console.log("iFunction")
}
// invoke / call
i();