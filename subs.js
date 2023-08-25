//kindly go through my README file first

const div=document.querySelector("div") //from the DOM


const myArray=[{id:1,username:'abel'},{id:2,username:'isaac'}] //array

  const myObj={ //object
    1:"sam",
    2:"femi",
    3:4,
    telephone:/^\d{11}$/
}
/* variables declared above will be used for every task */


/* task 1 */
myArray.forEach(obj=>{
    if(obj.id==1){
        obj.username=myObj[1]
    }
})
console.log(myArray)


/*task 2*/
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

/*task 3*/


const myText="i saw sam"

const resultant=myText.match(myObj[1])

console.log("resultant",resultant)


/*task 4*/
myArray.forEach((obj)=>{
    let p=document.createElement("p")
    p.innerText = obj.username.match(myObj[1])
    div.append(p)
    
})

/*task 5*/
myArray.forEach((obj)=>{
     Object.assign(obj,{occupation:"software developer"})
 let header=document.createElement("h2")
 header.innerText=`name:${obj.username}`
 let hnext=document.createElement("h3")
 hnext.innerText=`occupation:${obj.occupation}`
 div.append(header)
 div.append(hnext)

})
console.log(myArray)


