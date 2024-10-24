let counter = 0; //counter for all answers
let rightCounter = 0; //counter for correct answers

function answerSelector(event){ //fires when user clicks on any button which displays a particular answer
    counter+=1;
    document.getElementById("questionCounter").innerHTML = counter; //refreshes counter on the page
    let targetBlock = event.target;
    if (targetBlock.value === "right"){
        rightCounter+=1; //refreshes correct answer counter if the value of the button which was pressed is 'right'
        document.getElementById("resultDisplay").innerHTML = rightCounter; //refreshes counter on answer sheet which gets displayed on the webpage later
    }
    //if loop below refreshes comment regarding this quiz results according to the number of correct answers
    let comment = document.getElementById("comment");
    if (rightCounter <= 4){
        comment.innerHTML = "Oops! Seems all these words are new for you!";
    } else if (rightCounter > 4 && rightCounter <= 7) {
        comment.innerHTML = "Good job!";
    } else {
        comment.innerHTML = "Impressive!";
    }

    let targetContainer = targetBlock.parentElement; /*get parent element to perform command for each button 
whithin this particular parent container - this way we will be working with the question block for the question which
the user just clicked on*/
    let children = targetContainer.querySelectorAll("button"); //list of all buttons aka descriptions in the parent block
    for (let i = 0; i < 3; i++){
        let child = children[i];
        child.setAttribute("disabled", "true"); //disable all buttons so that user cannot alter the results
        if (child.value == "right"){
            child.style.borderColor = "darkolivegreen";
            child.style.background = "darkseagreen";
        } else {
            child.style.borderColor = "darkred";
            child.style.background = "darksalmon";
        }
    }
}

function displayResult(){ //fires at the end of the quiz when user wants to see overall result
    document.getElementById("navbar").style.display = "none";
    document.getElementById("blankSpace").style.display = "none";
    document.getElementById("answerSheet").style.display = "block";
    document.getElementById("buttons").style.display = "none";
    for (let i = 0; i < 20; i++){
        let answer = document.getElementsByClassName("answer");
        answer[i].style.display = "block"; //display words inside definition blocks so that user can compare words and their definitions 
    }
}