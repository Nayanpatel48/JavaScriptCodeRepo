//Immediately Invoked Function Expresson (IIFE)

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();
//DB CONNECTED
//why use iife? => sometimes there is pollution in global scope so in order to prevent that pollusion
//we used iife
//since above IIFE is invoked but it does not know where to end the context so in order to end the context
//in javaScript we must use the semicolun(;) otherwie below IIFE won't run

//writting iife in the form of arrow function
//simple IFFE
( ( ) => {
    console.log("Nayan")
} )();//ended context of iife with semicolun(;)

( (name) => {
    console.log(`my name is ${name}`)
} )("Nayan");
//my name is Nayan