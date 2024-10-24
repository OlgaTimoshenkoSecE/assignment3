function displayResult(){
    document.getElementById("navbar").style.display = "none";
    document.getElementById("blankSpace").style.display = "none";
    document.getElementById("answerSheet").style.display = "block";
    document.getElementById("buttons").style.display = "none";
    for (let i = 0; i < 21; i++){
        let answer = document.getElementsByClassName("answer");
        answer[i].style.display = "block";
        answer[i].style.fontWeight = "900";
    }
}

let counter = 0;
let rightCounter = 0;
function answerSelector(event){
    counter+=1;
    document.getElementById("questionCounter").innerHTML = counter;
    let targetBlock = event.target;
    if (targetBlock.value === "right"){
        rightCounter+=1;
    }
    let targetContainer = targetBlock.parentElement;
    let children = targetContainer.querySelectorAll("button");
    for (let i = 0; i < 3; i++){
        let child = children[i];
        child.setAttribute("disabled", "true");
        child.style.background = "white";
        if (child.value == "right"){
            child.style.borderColor = "green";
        } else {
            child.style.borderColor = "red";
        }
    }

}