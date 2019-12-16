(function() {
    // your page initialization code here
    // the DOM will be available here
    document.addEventListener("DOMContentLoaded", () => {
        // collecting DOM elements
        const inputGuess = document.getElementById("inputGuess");
        const btnGuess = document.getElementById("btnGuess");
        const playerTurn = document.getElementById("playerTurn");
        const aiTurn = document.getElementById("aiTurn");
        const aiNumber = document.getElementById("aiNumber");
        const btnSmaller = document.getElementById("btnSmaller");
        const btnBigger = document.getElementById("btnBigger");
        const btnCorrect = document.getElementById("btnCorrect");

        // additional variables
        const aiRandomNum = getRandomNumInRange(1, 100); // computer guess number
        let playerCounter = 1;
        let aiCounter = 1; // to count how many guesses 
        let isPlayerTurn = true;
        let aiGuessMin = 1;
        let aiGuessMax = 100;
        let aiGuessNum;
        const messages = {
            notNumber: "Это не число.\n\nПожалуйста, введите число от 1 до 100.",
            smaller: "Попробуйте ввести большее число",
            bigger: "Попробуйте ввести меньшее число",
            playerWin: `Поздравляем! Вы за ${playerCounter} попыток угадали число`,
            aiWin: `Игра окончена! Компьютер за ${aiCounter} попыток угадал ваше число`
        }

        // business functions
        function getRandomNumInRange(min, max) {
            const rangeMax = max - min + 1;
            return min + Math.floor(Math.random() * rangeMax + 1) - 1;
        }

        function changeTurn() {
            if (isPlayerTurn) {
                playerCounter++;              
            } else {
                aiCounter++;
            } 
            isPlayerTurn = !isPlayerTurn;            
            playerTurn.classList.toggle('hidden');
            aiTurn.classList.toggle('hidden');
            if (!isPlayerTurn) {
                handleAiTurn();
            }
        }

        function handleAiTurn() {
            aiGuessNum = getRandomNumInRange(aiGuessMin, aiGuessMax);
            aiNumber.textContent = aiGuessNum;
        } 

        function checkPlayerGuess(value) {
            if (value < aiRandomNum) {
                return "smaller";
            }
            if (value > aiRandomNum) {
                return "bigger";
            }
            messages.playerWin = "Поздравляем! Вы за " + playerCounter + " попыток угадали число";
            return "playerWin";
        }

        // handler functions
        function handleBtnGuessClick() {
            const inputValue = parseInt(inputGuess.value);
            if (isNaN(inputValue)) {
                alert(messages.notNumber);
                return;
            }
            const checkResult = checkPlayerGuess(inputValue);           
            alert(messages[checkResult]);
            changeTurn(); 
            inputGuess.value = '';   // remove input value after submit       
        }

        function handleBtnSmallerClick() {
            aiGuessMax = aiGuessNum - 1;
            changeTurn();       
        }

        function handleBtnBiggerClick() {
            aiGuessMin = aiGuessNum + 1;
            changeTurn();       
        }

        function handleBtnCorrectClick() {
            messages.aiWin = "Игра окончена! Компьютер за " + aiCounter + " попыток угадал ваше число";
            alert(messages.aiWin);
            changeTurn();     
        }

        // event handling
        btnGuess.addEventListener("click", handleBtnGuessClick);
        btnSmaller.addEventListener("click", handleBtnSmallerClick);
        btnBigger.addEventListener("click", handleBtnBiggerClick);
        btnCorrect.addEventListener("click", handleBtnCorrectClick);
    });
})();
