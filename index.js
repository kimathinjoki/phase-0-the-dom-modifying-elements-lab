// Write your code here!
const element = document.getElementById("main");

element.remove()


const newHeader = document.createElement("h1");
document.body.append(newHeader);



newHeader.id = "victory";

// newHeader.setAttribute =("id","victory");


newHeader.textContent="KIMATHI is the champion";


// const words = document.getElementById("victory")
// words.innerHTML= <h1><strong>KIMATHI</strong> is a champion</h1>