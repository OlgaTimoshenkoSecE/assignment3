# assignment3
1) Making a quiz where you select the meaning of some challenging english words.
2) Main page - description and authorization form down the page; submit button leads to the quiz page
3) First did the main page HTML CSS & JavaScript, then linked the "Submit" button to the next page
4) The main challenge was to create a function which fires when user selects an answer for this particular question and performs several commmands. Before creating this function I outlined what it should do:
 1 - change the counter for total answered questions (and show it)
 2 - IF the selected answer is correct, change the counter for correct answers
 3 - whithin a parent tag : IF id matches 'right', make the border of a button green, ELSE - make it red. 
 4 - make every button disabled
 4.1) My code has a lot of buttons, thus getElementById().AddEventListener wouldn't really work unless i make it for every button. Instead, I added onclick event whithin every button.
 4.2) I decided to approach making this fubction with small steps.
 1 step - passed value from the button to the function and made it print it out into console (just to check if it passed on correctly, removed it later). 
 2 step - made it change the counter on the navbar.
 3 step - reset counter for correct answers if the user was right.
 4 step - make a loop which will iterate over all buttons of the targeted question
 5 step - change buttons attributes 
5) I ended up adding counter for correct answers and commantary change inside the aforementioned function too (4); it didn't run the other way
6) there is a problem which keeps appearing inside console - some style property is not defined; i checked all document.style, but still cannot figure out where this error keeps coming from
7) i figured out the problem in (6) - my loop was iterating more than needed, so for this last iteration it didn't recieve anythig, therefore there was no 'style' attribute

8) throughout the project i added media queries for some tag

9) did final desk check