// function operationFactory(name){
//     switch(name){
//         case "add": return (a,b) => a+b;
//     }
// }

function operationFactory(name){
    switch(name){
        case "add": return function(a,b){
            return a+b;
        }
        case "sub": return function(a,b){
            return a-b;
        }
        default: 
            for(let i=0; i<3; i++){
                console.log("Hello you are a loser");
            }
        
    }
}


console.log(operationFactory("add")(2,5));
console.log(operationFactory("sub")(2,5));
console.log(operationFactory("adder")(2,5));