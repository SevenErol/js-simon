
const startButton = document.querySelector("button");

const numberDisplay = document.querySelector(".number_displayed");

const timer = document.querySelector(".timer");

const text = document.querySelector(".text");

let countDown;

const randomList = [];

const userAnswer = [];

let counter = 0;

let startNumber = 30;

const generateRandomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function generateBoxes() {

    for (let i = 0; i < 5; i++) {

        const singleBox = document.createElement("div");

        const randomNumber = generateRandomNumbers(1, 100);

        randomList.push(randomNumber);

        singleBox.innerHTML = randomNumber;

        singleBox.classList.add("box");

        numberDisplay.appendChild(singleBox);

    }
}

function cleanBoxes() {

    const boxesList = document.querySelectorAll(".box");

    for (let i = 0; i < 5; i++) {

        const oneBox = boxesList[i];

        oneBox.innerHTML = "";

    }

}

function questions() {

    for (let i = 0; i < 5; i++) {

        const asking = Number(prompt(`Qual'era il numero nella posizione ${i + 1}?`))

        userAnswer.push(asking);

    }

    for (let i = 0; i < userAnswer.length; i++) {

        if (randomList[i] === userAnswer[i]) {

            counter++

        }
    }

    switch (counter) {

        case 1:

            text.innerHTML = "Hai indovinato un solo numero!";

            break;

        case 2:

            text.innerHTML = "Hai indovinato due numeri!";

            break;

        case 3:

            text.innerHTML = "Hai indovinato tre numeri!";

            break;

        case 4:

            text.innerHTML = "Hai indovinato quattro numeri!";

            break;

        case 5:

            text.innerHTML = "Hai indovinato tutti e cinque i numeri!";

            break;


        default:


            text.innerHTML = "Non hai indovinato nessun numero riprova!";

            break;
    }
}

function chronometer() {

    startNumber--

    timer.innerHTML = startNumber;

    if (startNumber === 0) {

        cleanBoxes();

        clearInterval(countDown);

        setTimeout(questions, 2000);

        startNumber = 30;

    }

}


startButton.addEventListener("click", function () {

    numberDisplay.innerHTML = "";

    text.innerHTML = "";

    timer.innerHTML = "";

    let startNumber = 30;

    generateBoxes();

    timer.innerHTML = startNumber;

    countDown = setInterval(chronometer, 1000);

})

