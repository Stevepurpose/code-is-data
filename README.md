# Task 1
in task 1 we cycle through an array of objects,if we get the obj whose id is 1
we change the `username` to the value of the property listed as `1` in `myObj` which
is sam. what we basically did here is an elimination or substitution,whichever way 
you look at it.

# Task 2
For task 2 we did an input field validation for a field where a phone number should 
be entered. we used a regular expression to achieve this with the inbuilt test method
possessed by regular expressions.But looking at our code ,it will seem like we don't
have a regular expression defined anywhere ,taking a better look at our code we will
see a `telephone` property which value is a RegEx in the `myObj` object and we know
we can access our RegEx by `myObj.telephone`. so we use a function to validate,function
takes our input and regex as arguments.we then set an event listener on input that calls
 the validate function with a keyup event. You are going to need to create a seperate
 project for task 2. I just included it in this project to illustrate diversity.
  in your script .js you can have this below

  ```
   const myObj={ //object
   telephone:/^\d{11}$/
}


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

```
in your index.html all you will be needing is your `input` in your html body.


 # Task 3
 Here we matched a string defined as `myText` with the value of `myObj[1]` 
 which value is a string type. we did this with the string match method.

 # Task 4
 in task 1 we cycle through an array of objects,if we get the obj whose username 
 matches the value of the property listed as `1` in `myObj` which is sam. we  then
 output the match on the DOM.

 # Task 5
 in task 1 we cycle through an array of objects,we then perform a shallow copy
 using the  `Object.assign(target,source)` principle,making each object in the array
 a target and the source is an object with an `occupation` property copied to each object
 in the array.we then create elements for each proprty of each object and output through the 
 DOM.