//create promise
var myPromise = new Promise((resolve, reject) => {
    //api call
    var isApiSuccess = false
    if (isApiSuccess) {
        resolve('api is called')
    }
    else {
        reject('something happened')
    }
})
myPromise.then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})