var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordArr = ["tiger", "jaguar", "cougar", "capybara", "anaconda", "frog", "monkey", "gorilla", "piranha", "ant", "leopard", "elephant", "okapi", "python", "crocodile", "mamba", "parrot", "eagle", "chimpanzee", "termite", "bear", "sloth", "bat", "rhinoceros", "buffalo", "lemur", "hippo", "mongoose", "antelope", "fox"];

var wordChoice = wordArr[Math.floor(Math.random() * wordArr.length)]; {
    console.log(wordChoice)
}

var s;

var count = 0;

var answerArray = [];

function startUp() {
    for (var i = 0; i < wordChoice.length; i++) {
        answerArray[i] = "_ ";

        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;
    }
}

function Letter() {
    letter = document.getElementById("letter").value;

    console.log(letter)

    if (letter.length > 0) {
        for (var i = 0; i < wordChoice.length; i++) {
            if (wordChoice[i] === letter) {
                answerArray[i] = letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML = letter;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    if (count > 5) {
        document.getElementById("stats").innerHTML = "Guess faster";
    }
    if (wordChoice.length === count ) {
        alert("You win!")
    }
}


