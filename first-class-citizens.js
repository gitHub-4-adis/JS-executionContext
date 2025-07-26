// Function Statement
a(); // accessible due to hoisting
function a() {
    console.log(10);
}

// Function Expression
b(); // inaccessbile due to hoisting
let b = function() {
    console.log(100);
    return function() {
        console.log('function expression returned');
    }
}

// difference b/w fn statement and fn expression? Hoisting
// fn statement can be accessed before declaration & fn expression cannot bcz of EC memory component
// memory component assigns undefined to variables and whole fn ges copied to its identifier that's
// why fn statements are accessible before declaration

// diff b/w parameters and arguments?
function c(param1, param2) { // parameters
    console.log('calling c with', param1, param2);
}
c('hello', 'world'); // arguments

// First Class Citizens? - ability to use fn as values like passing them to another fn, returning fn from another
// fn, assiging fnf to variables make fn as first class citizens
