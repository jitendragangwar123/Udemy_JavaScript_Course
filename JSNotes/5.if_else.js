 # First Example
// function getPrice(item){
//     if(item==='Book'){
//         return 200;
//     }
//     else if(item==='Copy'){
//         return 300;
//     }
//     else if(item==='Laptop'){
//         return 30000;
//     }
//     else if(item==='Pen'){
//         return 10;
//     }
// }
//  console.log(getPrice("Pen"));

# Best approuch =>

const studyMaterials={
    Book:200,
    Copy:300,
    Laptop:30000,
    Pen:10
};

function getPrice(item){
    return studyMaterials[item];
}

console.log(getPrice("Laptop"));


# Second Example

let isDeveloper=false;
// if(isDeveloper){
//     console.log("You are a Developer.");
// }
// else{
//     console.log("You are not a Developer.");
// }

// Best Approuch

console.log(`You are ${isDeveloper ? " " : "not"} a Developer`);
