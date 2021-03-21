const promiseArray = capitalize(['music', 'javascript', 'cinema', 'php']);

function capitalize(arrWord) {
    return new Promise(function(resolve, reject){
        const uppercaseArray = arrWord.map(function(item) { 
            if(typeof item === "string") {
                return item.toUpperCase();
            }else {
                reject(new Error("array include elements different from string"));
            }            
        });
        resolve(uppercaseArray);
    });
}

promiseArray
    .then(function(arrWord){
        console.log(arrWord.sort());
    })
    .catch(err => console.error(err));