//connects to solutions.html

//selection
let button7 = document.getElementById("WHITE2")
let button8 = document.getElementById("RED2")
let button9 = document.getElementById("BLACK2") 


let b21 = document.getElementById("b1")
let b22 = document.getElementById("b2")


let j1 = document.querySelector("#h1")
let j2 = document.querySelector("#h2")
let j3 = document.querySelector("#h3")

//function
b21.addEventListener("click", function(event){
 j1.textContent = "CHECKING A PERSON'S BACKGROUND CAN SEE IF THEY HAVE ANY KIND OF CRIMINAL HISTORY AND THEREFORE PREVENT THEM FROM PURCHASING IT."
 j2.textContent = "REDUCE EASY ACCESS TO DANGEROUS WEAPONS."
 j3.textContent = "REDUCE FIREARM ACCESS TO YOUTH AND INDIVIDUALS WHO ARE AT RISK OF HARMING THEMSELVES OR OTHERS. HOLD THE GUN INDUSTRY ACCOUNTABLE AND ENSURE THERE IS ADEQUATE OVERSIGHT OVER THE MARKETING AND SALES OF GUNS AND AMMUNITION. ENGAGE RESPONSIBLE GUN DEALERS AND OWNERS IN SOLUTIONS. INSIST ON MANDATORY TRAINING AND LICENSING FOR OWNERS. REQUIRE SAFE AND SECURE GUN STORAGE."
})


b22.addEventListener("click", function(event){
 j1.textContent = "Checking a person's background can see if they have any kind of criminal history and therefore prevent them from purchasing it"
 j2.textContent = "Reduce easy access to dangerous weapons."
 j3.textContent = "Reduce firearm access to youth and individuals who are at risk of harming themselves or others.Hold the gun industry accountable and ensure there is adequate oversight over the marketing and sales of guns and ammunition.Engage responsible gun dealers and owners in solutions.Insist on mandatory training and licensing for owners.Require safe and secure gun storage."
})
