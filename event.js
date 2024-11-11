function clickable() {
    alert("This is a clickable link!");
}

//2
function myclick() {
    alert("Thanks for Purchasing a mobile from us!");
}

//3
function mytablefunction(button) {

    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

}

//4
var image = document.getElementById("image");
function changeImage() {
    image.src = "assets/circle.jpg";
}
function resetImage() {
    image.src = "assets/sun.jpg";
}

//5
var counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById('counterValue').innerText = counter;
}

function decreaseCounter() {
    counter--;
    document.getElementById('counterValue').innerText = counter;
}