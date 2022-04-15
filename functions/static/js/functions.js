// // fetching app/mongo route.
// async function fetchMongoData(){
//     const mongoData = await fetch("app/mongo");
//     const responseMongo = await mongoData.text();
//     return responseMongo;
// }

// // call back function from fetchMongoData (necessary for async functions)/
// fetchMongoData().then(function (result) {
//     document.getElementById("mongoData").innerHTML = result;
// });

let btnScience1 = document.getElementById("btnScience1");
let btnScience2 = document.getElementById("btnScience2");
let btnHistory1 = document.getElementById("btnHistory1");
let btnEngineering1 = document.getElementById("btnEngineering1");

// fetching app/mongo route.
async function fetchHST01() {
    const mongoData = await fetch("HST01");
    const responseMongo = await mongoData.json();
    return responseMongo;
}

// fetching app/mongo route.
async function fetchSCI01() {
    const mongoData = await fetch("SCI01");
    const responseMongo = await mongoData.json();
    return responseMongo;
}

// fetching app/mongo route.
async function fetchMEC01() {
    const mongoData = await fetch("MEC01");
    const responseMongo = await mongoData.json();
    return responseMongo;
}

// fetching app/mongo route.
async function fetchCIS01() {
    const mongoData = await fetch("CIS01");
    const responseMongo = await mongoData.json();
    return responseMongo;
}

// call back function from fetchMongoData (necessary for async functions)/
fetchHST01().then(function(result) {
    if (btnHistory1) {
        btnHistory1.addEventListener("click", function() {
            let confirmAction = confirm("You're about to take a quiz.");
            if (confirmAction) {
                let quizPage = window.open("quizPage.html");
                quizPage.addEventListener("DOMContentLoaded", () => {
                    // Now we can access elements on the quiz page
                    quizPage.document.getElementById("quizHeading1").innerHTML =
                        result.category + " - " + result.quizName;
                    for (let i = 0; i <= 10; i++) {
                        quizPage.document.getElementById("q" + (i + 1)).innerHTML =
                            result.quizQuestions[i].question;
                        for (let j = 0; j <= 3; j++) {
                            quizPage.document.getElementById(
                                "q" + (i + 1) + "Option" + (j + 1)
                            ).innerHTML = result.quizQuestions[i].options[j];
                        }
                    }
                });
            } else {
                alert("Action canceled");
            }
        });
    }
});

// call back function from fetchMongoData (necessary for async functions)/
fetchSCI01().then(function(result) {
    if (btnScience1) {
        btnScience1.addEventListener("click", function() {
            let confirmAction = confirm("You're about to take a quiz.");
            if (confirmAction) {
                let quizPage = window.open("quizPage.html");
                quizPage.addEventListener("DOMContentLoaded", () => {
                    // Now we can access elements on the quiz page
                    quizPage.document.getElementById("quizHeading1").innerHTML =
                        result.category + " - " + result.quizName;
                    for (let i = 0; i <= 10; i++) {
                        quizPage.document.getElementById("q" + (i + 1)).innerHTML =
                            result.quizQuestions[i].question;
                        for (let j = 0; j <= 3; j++) {
                            quizPage.document.getElementById(
                                "q" + (i + 1) + "Option" + (j + 1)
                            ).innerHTML = result.quizQuestions[i].options[j];
                        }
                    }
                });
            } else {
                alert("Action canceled");
            }
        });
    }
});

// call back function from fetchMongoData (necessary for async functions)/
fetchMEC01().then(function(result) {
    if (btnEngineering1) {
        btnEngineering1.addEventListener("click", function() {
            let confirmAction = confirm("You're about to take a quiz.");
            if (confirmAction) {
                let quizPage = window.open("quizPage.html");
                quizPage.addEventListener("DOMContentLoaded", () => {
                    // Now we can access elements on the quiz page
                    quizPage.document.getElementById("quizHeading1").innerHTML =
                        result.category + " - " + result.quizName;
                    for (let i = 0; i <= 10; i++) {
                        quizPage.document.getElementById("q" + (i + 1)).innerHTML =
                            result.quizQuestions[i].question;
                        for (let j = 0; j <= 3; j++) {
                            quizPage.document.getElementById(
                                "q" + (i + 1) + "Option" + (j + 1)
                            ).innerHTML = result.quizQuestions[i].options[j];
                        }
                    }
                });
            } else {
                alert("Action canceled");
            }
        });
    }
});

// call back function from fetchMongoData (necessary for async functions)/
fetchCIS01().then(function(result) {
    if (btnScience2) {
        btnScience2.addEventListener("click", function() {
            let confirmAction = confirm("You're about to take a quiz.");
            if (confirmAction) {
                let quizPage = window.open("quizPage.html");
                quizPage.addEventListener("DOMContentLoaded", () => {
                    // Now we can access elements on the quiz page
                    quizPage.document.getElementById("quizHeading1").innerHTML =
                        result.category + " - " + result.quizName;
                    for (let i = 0; i <= 10; i++) {
                        quizPage.document.getElementById("q" + (i + 1)).innerHTML =
                            result.quizQuestions[i].question;
                        for (let j = 0; j <= 3; j++) {
                            quizPage.document.getElementById(
                                "q" + (i + 1) + "Option" + (j + 1)
                            ).innerHTML = result.quizQuestions[i].options[j];
                        }
                    }
                });
            } else {
                alert("Action canceled");
            }
        });
    }
});