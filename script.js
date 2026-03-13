const roles=[
"Front-End Developer",
"UI/UX Designer",
"Web Designer"
]

let index=0
let charIndex=0

function typeEffect(){

let current=roles[index]

if(charIndex<current.length){

document.getElementById("typing").textContent+=current.charAt(charIndex)

charIndex++

setTimeout(typeEffect,80)

}

else{

setTimeout(()=>{

document.getElementById("typing").textContent=""

charIndex=0

index++

if(index>=roles.length){
index=0
}

typeEffect()

},1500)

}

}

typeEffect()


const toggle=document.getElementById("theme-toggle")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode")

})