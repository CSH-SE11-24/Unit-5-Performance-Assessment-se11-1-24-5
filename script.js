//connects to index.html

//selection
let button1 = document.getElementById("WHITE")
let button2 = document.getElementById("RED")
let button3 = document.getElementById("BLACK")



let htag1 = document.getElementById("h5")
let htag2 = document.querySelector(".h6")



let body1 = document.getElementById("body1")
let body2 = document.getElementById("body2")
let body3 = document.getElementById("body3")


//function
button1.addEventListener("click", function(event){
  htag1.style.color = "white"
})

button2.addEventListener("click", function(event){
  htag1.style.color = "red"
})

button3.addEventListener("click", function(event){
  htag1.style.color = "black"
})





