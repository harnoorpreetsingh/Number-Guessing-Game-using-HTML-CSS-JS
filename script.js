console.log("Script working");
let count = 0;
let won = false;
let submitbtn = document.getElementById("submitbtn");
let resetbtn = document.querySelector("#resetbtn"); // Assuming there's only one element with this class
let attemptsMade = document.getElementById("atts");
let feedback = document.getElementById("feedback");
let input = document.getElementById("input");
let randomValue = generateRandomValue();

resetbtn.onclick = () => {
    console.log("clicked");
    let submitbtn = document.getElementById("submitbtn");
    submitbtn.removeAttribute("disabled");
    input.value = "";
    attemptsMade.innerText = "0"
    feedback.innerText = "";
    count = 0
};

function increaseCounter(){
    if (count < 10) {
        count++;
        attemptsMade.innerText = count;
    } else {
        attemptsMade.innerText = "10/10 - Attempts Finished";
        input.value = "";

        if (!won) {
            feedback.innerText = `Not Correct. You lost, the ans was ${randomValue}`
        }
    }
} 


submitbtn.onclick = () => {
    let val = Number(input.value);
    if(val==""){
        submitbtn.setAttribute("disabled", true);
        alert("Please Enter Numbers, then Submit your Guess.")
        alert("Invalid Move! Click on 'Restart the Game' to play")        
    }
    
     else if (isNaN(val)) {
        alert("Please enter Numbers only");
    } 
    
    console.log(val);
    checkValue(val, randomValue, count);
    increaseCounter();   
};

function generateRandomValue(){
return Math.floor(Math.random() * 100) + 1
}

function checkValue(val, randomValue, count) {
   
    if (val >= 1 && val <= 100) {
        if (val == randomValue) {
            feedback.innerText = `${val} - Congratulations, you won in ${count + 1} attempts!`;
            won = true;
            let submitbtn = document.getElementById("submitbtn");
            submitbtn.setAttribute("disabled", true);
        } else if ((randomValue - val) > 10) {
            feedback.innerText = `${val} - Too low!`;
        } else if ((val - randomValue) > 10) {
            feedback.innerText = `${val} - Too high!`;
        } else if ((randomValue - val) <= 10 && randomValue > val) {
            feedback.innerText = `${val} - Slightly low!`;
        } else if ((val - randomValue) <= 10 && val > randomValue) {
            feedback.innerText = `${val} - Slightly high!`;
        }
    } else {
        alert("Please write in range of 1-100")
        feedback.innerText = `${val} - No hints for this value. Please write in range of 1-100`;
    }
}   
