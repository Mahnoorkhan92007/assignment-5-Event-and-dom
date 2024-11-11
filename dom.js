var main = document.getElementById("main-content");
//2
var children = main.children;

for (var i = 0; i < children.length; i++) {
    document.write(children[i].innerHTML + "<br>");
}
//3
document.write("<h1>Render</h1><br>");
var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + "<br>");
}
//4
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Mahnoor";

// 5

var lastname = document.getElementById("last-name");
lastname.value = "Khan";

var email = document.getElementById("email");
email.value = "mahnoorkhan92007@gmail.com";


document.write("<h1>NODES</h1><br>");

var form = document.getElementById("form-content")

document.write(form.nodeType + "<br>")


//2
var lastNameElement = document.getElementById("lastName");
document.write("Node type of lastName element:", lastNameElement.nodeType + "<br>");//elements node is 1
//p is a element

if (lastNameElement.childNodes.length > 0) {
    document.write(lastNameElement.childNodes[0].nodeType);
}

//3
lastNameElement.childNodes[0].nodeValue = "Last Name: Updated Name";

//4
var mainContent = document.getElementById("main-content");
console.log(mainContent.firstChild);
console.log(mainContent.lastElementChild);

//5

console.log(lastNameElement.nextSibling);
console.log(lastNameElement.previousSibling);


//6
var parentNode = lastNameElement.parentNode;
console.log(parentNode);
console.log(parentNode.nodeType); 
