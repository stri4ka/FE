var randomNum = Math.floor(Math.random() * 100 + 1); 
var counter = 1; 
	
document.getElementById("submitguess").onclick = function(){ 
	
    var userNum = document.getElementById("guessField").value; 
    if (isNaN(userNum)) {
        alert("Это не число.\n\n" +
              "Пожалуйста, введите число от 1 до 100.");
        return false;
    }
    if ((userNum < 1) || (userNum > 100)) {
        alert("Пожалуйста, введите число в диапазоне от 1 до 100.");
        return false;
    }
    if(userNum == randomNum) {	 
        alert("Поздравляем! Вы за " + counter + " попыток угадали число"); 
    } 
    else if(userNum > randomNum) {	 
        counter++; 
        alert("Попробуйте ввести меньшее число"); 
    } 
    else{ 
        counter++; 
        alert("Попробуйте ввести большее число"); 
    } 
} 