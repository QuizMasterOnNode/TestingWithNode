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

// // call back function from fetchMongoData (necessary for async functions)/
// fetchHST01().then(function(result) {
//     if (btnHistory1) {
//         btnHistory1.addEventListener("click", function() {
//             let confirmAction = confirm("You're about to take a quiz.");
//             if (confirmAction) {
//                 let quizPage = window.open("quizPage.html");
//                 quizPage.addEventListener("DOMContentLoaded", () => {
//                     // Now we can access elements on the quiz page
//                     quizPage.document.getElementById("quizHeading1").innerHTML =
//                         result.category + " - " + result.quizName;
//                     for (let i = 0; i <= 10; i++) {
//                         quizPage.document.getElementById("q" + (i + 1)).innerHTML =
//                             result.quizQuestions[i].question;
//                         for (let j = 0; j <= 3; j++) {
//                             quizPage.document.getElementById(
//                                 "q" + (i + 1) + "Option" + (j + 1)
//                             ).innerHTML = result.quizQuestions[i].options[j];
//                         }
//                     }
//                 });
//             } else {
//                 alert("Action canceled");
//             }
//         });
//     }
// });

if (btnHistory1) {
    // call back function from fetchMongoData (necessary for async functions)/
    fetchHST01().then(function(result) {
        btnHistory1.addEventListener("click", function() {
            var modal = document.getElementById("quizModal1");
            var span = document.getElementsByClassName("close")[0];
            let btnConfirm1 = document.getElementById("ok1");
            let btnCancel1 = document.getElementById("cancel1");
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            };
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
            btnConfirm1.addEventListener("click", function() {
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
                modal.style.display = "none";
            });
            btnCancel1.addEventListener("click", function() {
                modal.style.display = "none";
            });
        });
    });
}

if (btnScience1) {
    // call back function from fetchMongoData (necessary for async functions)/
    fetchSCI01().then(function(result) {
        btnScience1.addEventListener("click", function() {
            var modal = document.getElementById("quizModal1");
            var span = document.getElementsByClassName("close")[0];
            let btnConfirm1 = document.getElementById("ok1");
            let btnCancel1 = document.getElementById("cancel1");
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            };
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
            btnConfirm1.addEventListener("click", function() {
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
                modal.style.display = "none";
            });
            btnCancel1.addEventListener("click", function() {
                modal.style.display = "none";
            });
        });
    });
}

if (btnScience2) {
    // call back function from fetchMongoData (necessary for async functions)/
    fetchCIS01().then(function(result) {
        btnScience2.addEventListener("click", function() {
            var modal = document.getElementById("quizModal2");
            var span = document.getElementsByClassName("close")[0];
            let btnConfirm2 = document.getElementById("ok2");
            let btnCancel2 = document.getElementById("cancel2");
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            };
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
            btnConfirm2.addEventListener("click", function() {
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
                modal.style.display = "none";
            });
            btnCancel2.addEventListener("click", function() {
                modal.style.display = "none";
            });
        });
    });
}

if (btnEngineering1) {
    // call back function from fetchMongoData (necessary for async functions)/
    fetchMEC01().then(function(result) {
        btnEngineering1.addEventListener("click", function() {
            var modal = document.getElementById("quizModal1");
            var span = document.getElementsByClassName("close")[0];
            let btnConfirm1 = document.getElementById("ok1");
            let btnCancel1 = document.getElementById("cancel1");
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            };
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
            btnConfirm1.addEventListener("click", function() {
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
                modal.style.display = "none";
            });
            btnCancel1.addEventListener("click", function() {
                modal.style.display = "none";
            });
        });
    });
}