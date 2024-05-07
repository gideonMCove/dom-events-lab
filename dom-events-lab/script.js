// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.



/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let number1 = 0
let number2 = 0
let finalAnswer = 0
let totalFirstAnswer = 0
let totalFirstNumber =0
const queuedNumbers = []
totalNumber = " "
currentDisplay = 0 //figure out later 
const numbers = document.querySelectorAll(".button")
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      //console.log(event.target.innerText);
      // Future logic to capture the button's value goes here...
      if (event.target.innerText != '+' && event.target.innerText != '-' && event.target.innerText !='C' && event.target.innerText != '/' && event.target.innerText !='*' ) {
        totalNumber +=` ${event.target.innerText}` 
        document.getElementById("display").innerHTML = `${totalNumber}`
      } else if(event.target.innerText == '+') {
        number1 = parseInt(totalNumber)
        totalNumber = ''
        if (event.target.innerText == '='||event.target.innerText == '+' || event.target.innerText == '-' || event.target.innerText == '*' || event.target.innerText == '/') {
            number2 = parseInt(totalNumber)
            finalAnswer = number1 + number2
            totalNumber = ''
            number1 = 0
            number2 = 0
            return
        } 
                    
        
      } else if(event.target.innerText == '-'){
        number1 = parseInt(totalNumber)
        totalNumber = ''
        if (event.target.innerText == '='||event.target.innerText == '+' || event.target.innerText == '-' || event.target.innerText == '*' || event.target.innerText == '/') {
            number2 = parseInt(totalNumber)
            finalAnswer = number1 + number2
            totalNumber = ''
            number1 = 0
            number2 = 0
            return
        } 
      } else if(event.target.innerText == '*'){
        number1 = parseInt(totalNumber)
        totalNumber = ''
        if (event.target.innerText == '='||event.target.innerText == '+' || event.target.innerText == '-' || event.target.innerText == '*' || event.target.innerText == '/') {
            number2 = parseInt(totalNumber)
            finalAnswer = number1 + number2
            totalNumber = ''
            number1 = 0
            number2 = 0
            return
        } 
      }else if(event.target.innerText == '/'){
        number1 = parseInt(totalNumber)
        totalNumber = ''    
        if (event.target.innerText == '='||event.target.innerText == '+' || event.target.innerText == '-' || event.target.innerText == '*' || event.target.innerText == '/') {
            number2 = parseInt(totalNumber)
            finalAnswer = number1 + number2
            totalNumber = ''
            number1 = 0
            number2 = 0
            return
        }   
      }else if(event.target.innerText == '='){
        finalAnswer = number1 + parseInt(totalNumber)
      }else if(event.target.innerText == 'C')
        totalNumber =''
        number1=0
        number2=0
        return


         
      
    })});
// function specialOperator (event) {
//     if (event.target.innerText == '+'){
//         queuedNumbers.push(parseInt(totalFirstNumber))
        
//     }else if(event.target.innerText == '-'){
//         queuedNumbers.push(parseInt(totalFirstNumber))
        
//       } else if(event.target.innerText == '*'){
//         queuedNumbers.push(parseInt(totalFirstNumber))
        
//       }else if(event.target.innerText == '/'){
//         queuedNumbers.push(parseInt(totalFirstNumber))
        
//       }else if (event.target.innerText == 'C'){
//         queuedNumbers.push(parseInt(totalFirstNumber))
//         doClear()
//       }
// }
  
// doAddition (number1) {
    
    
    

//  }  
  
// function numberAccumulator (e){
//     totalNumber = e + totalNumber

// }

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
