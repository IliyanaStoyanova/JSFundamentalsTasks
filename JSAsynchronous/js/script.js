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
(async function() {
    const res = Promise.resolve(capitalize(arrWords));
    await res.then(async function(result){
       const resSort = Promise.resolve(sortWords(result));
       await resSort.then(function(result){
            console.log(result);
       });
    }).catch(err => console.error(err));
})();
