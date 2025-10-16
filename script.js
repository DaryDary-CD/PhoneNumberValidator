const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const regex = {
  noPths: /^\s?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/,
  hasPths: /\(/,
  withPths: /^\s?\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/
};

const isValidNoPths = str => regex.noPths.test(str);
const hasParenthesis = str => regex.hasPths.test(str);
const isValidWithPths = str => regex.withPths.test(str);

const phoneNumberValidation = input =>{
    const inputNumbers = input.split('').filter(inp => /([0-9])/.test(inp)).length;
    let inputToValid = "";
    if (input[0] === '1' && inputNumbers === 11){
        inputToValid = input.slice(1);
    }else if(inputNumbers === 10){
        inputToValid = input;
    }else {
        return false;
    }
    return hasParenthesis(input.slice(0,3))? isValidWithPths(inputToValid) : isValidNoPths(inputToValid);
}

const checkButtonFuntion = () => {
    if (input.value === ""){
     alert("Please provide a phone number");
    }else{
    const validOrInvalid = phoneNumberValidation(input.value)? "Valid" : "Invalid";
    results.innerHTML = `<p>${validOrInvalid} US Number: ${input.value}</p>`;
    }
}

checkButton.addEventListener("click",checkButtonFuntion);
clearButton.addEventListener("click",() => {
    input.value = "";
    results.innerHTML = "";
});