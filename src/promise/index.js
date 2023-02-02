const promise = new Promise(function (resolve, reject) {
    resolve("lokaso");
})


cows = 9;
const counCowns = new Promise(function (resolve, reject) {
    if (cows > 10){
        resolve(`we have ${cows}`);
    }else{
        reject("there is no cowns on the farm");
    }
    
})

counCowns.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally");
})