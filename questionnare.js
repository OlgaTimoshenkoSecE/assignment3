let counter = 0;
let rightCounter = 0;
function answerSelector(event){
    counter+=1;
    document.getElementById("questionCounter").innerHTML = counter;
    let targetBlock = event.target;
    if (targetBlock.value === "right"){
        rightCounter+=1;
        document.getElementById("resultDisplay").innerHTML = rightCounter;
    }
    if (rightCounter <= 4){
        comment.innerHTML = "Oops! Seems all these words are new for you!";
    } else if (rightCounter > 4 && rightCounter <= 7) {
        comment.innerHTML = "Good job!";
    } else {
        comment.innerHTML = "Impressive!";
    }

    let targetContainer = targetBlock.parentElement;
    let children = targetContainer.querySelectorAll("button");
    for (let i = 0; i < 3; i++){
        let child = children[i];
        child.setAttribute("disabled", "true");
        if (child.value == "right"){
            child.style.borderColor = "darkolivegreen";
            child.style.background = "darkseagreen";
        } else {
            child.style.borderColor = "darkred";
            child.style.background = "darksalmon";
        }
    }
}

function displayResult(){
    document.getElementById("navbar").style.display = "none";
    document.getElementById("blankSpace").style.display = "none";
    document.getElementById("answerSheet").style.display = "block";
    document.getElementById("buttons").style.display = "none";
    for (let i = 0; i < 20; i++){
        let answer = document.getElementsByClassName("answer");
        answer[i].style.display = "block";
    }
    let comment = document.getElementById("comment");
}