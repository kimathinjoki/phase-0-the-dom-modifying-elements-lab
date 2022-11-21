// Write your code here!
const element = document.getElementById("main");

element.remove()


const newHeader = document.createElement("h1");
// document.body.append(newHeader);

newHeader.setAttribute("id","victory");

// newHeader= "victory";


const me = "Kimathi";
newHeader.textContent= `${me} is the champion`;

// const words = document.getElementById("victory")
// words.innerHTML= <h1><strong>KIMATHI</strong> is a champion</h1>