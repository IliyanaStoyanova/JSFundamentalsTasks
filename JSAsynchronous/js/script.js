const arrWords = ['music', 'javascript', 'cinema', 'php'];

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
function sortWords(arrWord) {
    return new Promise(function(resolve, reject) {
        resolve(arrWord.sort());
    });
}

capitalize(arrWords)
.then(sortWords)
.then(console.log);