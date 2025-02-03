//create a promise
const myPromise= new Promise((resolve,reject)=>{
    //api call
    var isApiSuccess=false;
    if(isApiSuccess){
        resolve("API is success");
    }
    else{
        reject("Something happened")
    }
})
myPromise.then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})