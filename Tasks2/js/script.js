const btn = document.querySelector("button");
const aTag = document.querySelector("#w3r");

if(btn !== null) {
    btn.addEventListener("click", function() {
        console.log(aTag.getAttribute("href"));
        console.log(aTag.getAttribute("hreflang"));
        console.log(aTag.getAttribute("rel"));
        console.log(aTag.getAttribute("target"));
        console.log(aTag.getAttribute("type"));
    });
}

const btnInsert = document.querySelector("input[type=button]");
const tbl = document.querySelector("#sampleTable");
if(btnInsert !== null) {
    let row = 3;
    btnInsert.addEventListener("click", function() {
        let newRow = tbl.insertRow(-1);
        let firstCell = newRow.insertCell(0);
        let text = document.createTextNode("Row"+row+" cell1"); 
        firstCell.appendChild(text);

        let secondCell = newRow.insertCell(1);
        text = document.createTextNode("Row"+row+" cell2");
        secondCell.appendChild(text);
        
        row++;
    });
}

const formCal = document.querySelector("form[name=sphere]");
if(formCal !== null) {
    formCal.addEventListener("submit", function(e){
       e.preventDefault();
       const radius = Math.abs(formCal.querySelector("#radius").value);
       const result = 4/3 * Math.PI * Math.pow(radius,3);
       formCal.querySelector("#volume").value = result.toFixed(4);
    });
}

document.querySelectorAll("b").forEach(item => {
    item.addEventListener("mouseover", (e) => {
        item.classList.add("bolder");
    });
});

function windowSize() {
    const wSize = document.querySelector(".wSize");
    if(wSize !== null) {
        wSize.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
    }
}

function traverseDom() {
    const parentElement = document.querySelector("#page");
    if(parentElement !== null) {
        const firstChild = parentElement.firstElementChild;
        const lastChild = parentElement.lastElementChild;

        const nSibling  = parentElement.nextElementSibling;
        const pSibling = lastChild.previousElementSibling;

        const pNode = lastChild.parentNode;
        const childNode = parentElement.children;

        console.log(firstChild);
        console.log(lastChild);
        console.log(nSibling);
        console.log(pSibling);
        console.log(pNode);
        console.log(childNode);

        const pContent = lastChild.querySelector("p").firstChild;
        pContent.nodeValue = "New content";

        lastChild.setAttribute("id", "new-content");
        const getAttr = lastChild.getAttribute("id");

        console.log(getAttr);
    }
}
traverseDom();

function nodeTask() {
    const parentElement = document.querySelector("#header");
    if(parentElement !== null) {
        const hTag = parentElement.querySelector("h1");

        const newChild = document.createElement("p");
        newChild.innerHTML = "New p tag";
        
        parentElement.appendChild(newChild);
        parentElement.insertBefore(newChild, hTag);

        parentElement.removeChild(newChild);

        parentElement.replaceChild(newChild, hTag);
    }
}
nodeTask();