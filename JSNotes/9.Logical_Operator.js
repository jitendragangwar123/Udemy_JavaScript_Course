function logicalOperator(age,bribe,whitelisted){
    if(!whitelisted){
        console.log("You are banned",whitelisted);
    }
    else{
        if((age>18 && bribe>500) || bribe >600){
            console.log("You are eligible");
        }
        else {
            console.log("You are not eligible");
        }
    }
}
logicalOperator(19,600,false); //You are banned false