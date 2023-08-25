import { myObj } from "./subs"

const input=document.querySelector("input")
function validate(input,regex){
    if(regex.test(input.value)){
        input.className="valid"
    }
  else{
    input.className="invalid"
  }


}
input.addEventListener("keyup",e=>{
    validate(e.target,myObj.telephone)
})