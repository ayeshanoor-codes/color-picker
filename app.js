function colorChanger (){
let colorPicker = document.getElementById("colorPicker");
let colorName = document.getElementById("colorName") ;
let colorBox = document.getElementById("colorBox");

let selectedColor = colorPicker.value ;
colorName.textContent = selectedColor;
colorBox.style.backgroundColor = selectedColor;
}
