// function add(x,y,config){
//     console.log(arguments);
//     const result = x + y;
//     if(config && config.log){
//         console.log("config vorhanden und config.log:" ,result, config);
//     }
//     if(config && !config.log){
//         console.log("config vorhanden:" ,result, config);
//     }
//     return result;
// }

function add(x){
    console.log(arguments);
    
}

add(2,2);
add(2,2, { log: true});
add(2,2, {});