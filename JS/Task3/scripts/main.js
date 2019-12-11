var randomNum = Math.floor(Math.random() * 100 + 1); 
var counter = 1; 
	
document.getElementById("submitguess").onclick = function(){ 
	
    var userNum = document.getElementById("guessField").value; 

    if(userNum == randomNum) {	 
        alert("Поздравляем! Вы за " + counter + " попыток угадали число"); 
    } 
    else if(userNum > randomNum) {	 
        counter++; 
        alert("Попробуйте ввести меньшее число"); 
    } 
    else{ 
        counter++; 
        alert("Попробуйте ввести большее число") 
    } 
} 