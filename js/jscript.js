const btn = document.querySelector("#btn-name")
const inputText = document.querySelector("#user-name")



var test
btn.addEventListener("click",geta)
function geta(){
    test = document.getElementById("user-name").value
    getAge()
}
function getAge(){
  
    fetch(`https://api.genderize.io?name=${test}`)
    .then((response) => response.json())
    .then((data)=>console.log(data))  
    
  }
  
