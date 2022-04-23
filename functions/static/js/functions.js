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
let btnHistory1 = document.getElementById("btnHistory1");
let btnEngineering1 = document.getElementById("btnEngineering1");
let btnEngineering2 = document.getElementById("btnEngineering2");
let qBox = document.getElementById("quizBox");

import {dumpSession} from "./authentication.js";



//Fetch route to display quiz scores
async function fetchQuizData(email) {
    const myString = "qResults?email="+email;
    const mongoData = await fetch(myString);
    const responseMongo = await mongoData.json();
    return responseMongo;
}

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

//Check for existence of a div, if the div exists then there is room to build a scores table.
if(qBox) {
    const userName = await dumpSession();
    if(userName == null) {
        console.log("ERROR"); 
        
    }
    else {
        console.log("HELLO");
        fetchQuizData(userName).then(function(result) {
            var rTable = document.getElementById("rTable");
            var quizName;
            var quizDate;
            var quizScore;
            //var allScores = result.scores.sort(
            for(let i = 0; i < result.scores.length; i++) {
                quizName = result.scores[i].quiz;
                quizDate = result.scores[i].dateTaken;
                quizDate = quizDate.toString();
                quizDate = quizDate.substr(0,10);
                quizScore = result.scores[i].score;
                var rRow = document.createElement("tr");
                var item1, item2, item3;
                item1 = document.createElement("td");
                item2 = document.createElement("td");
                item3 = document.createElement("td");
            
                item1.innerHTML = quizName;
                item2.innerHTML = quizDate;
                item3.innerHTML = quizScore;
                rRow.appendChild(item1);
                rRow.appendChild(item2);
                rRow.appendChild(item3);
                rTable.appendChild(rRow);
            }
        
        })
    }
}

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
                    var questionCount = Object.keys(result.quizQuestions).length;
                    var quizForm = document.createElement("form");
                    quizForm.id = "quizForm";
                    quizPage.document.getElementById("questions").appendChild(quizForm);
                    for (let i = 0; i < questionCount; i++) {
                        var questionHeading = document.createElement("h4");
                        questionHeading.id = "questionHeading";
                        questionHeading.innerHTML = "Question" + " " + (i + 1);
                        var question = document.createElement("div");
                        question.id = "question" + (i + 1);
                        var newline2 = document.createElement("br");
                        var newline4 = document.createElement("br");
                        var ptag = document.createElement("p");
                        var questionText = document.createTextNode(
                            result.quizQuestions[i].question
                        );
                        ptag.appendChild(questionText);
                        question.appendChild(questionHeading);
                        question.appendChild(newline4);
                        question.appendChild(ptag);
                        question.appendChild(newline2);
                        quizPage.document.getElementById("quizForm").appendChild(question);

                        var optionCount = Object.keys(
                            result.quizQuestions[i].options
                        ).length;
                        var options = document.createElement("div");
                        options.id = "question" + (i + 1) + "Options";
                        for (let j = 0; j < optionCount; j++) {
                            var radiobox = document.createElement("input");
                            radiobox.type = "radio";
                            radiobox.id = "q" + (i + 1) + "Option" + (j + 1);
                            radiobox.name = "q" + (i + 1) + "Options";
                            radiobox.value = i + 1;

                            var label = document.createElement("label");
                            label.htmlFor = "q" + (i + 1) + "Option" + (j + 1);

                            var option = document.createTextNode(
                                " " + result.quizQuestions[i].options[j]
                            );
                            label.appendChild(option);

                            var newline = document.createElement("br");
                            var newline3 = document.createElement("br");

                            options.appendChild(radiobox);
                            options.appendChild(label);
                            options.appendChild(newline);
                            options.appendChild(newline3);

                            quizPage.document
                                .getElementById("question" + (i + 1))
                                .appendChild(options);
                        }
                    }
                    var sbDiv = document.createElement("div");
                    sbDiv.id = "submit_button";
                    var submitButton = document.createElement("button");
                    submitButton.innerHTML = "Submit";
                    sbDiv.appendChild(submitButton);
                    quizPage.document.getElementById("quizForm").appendChild(sbDiv);
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
                    var questionCount = Object.keys(result.quizQuestions).length;
                    var quizForm = document.createElement("form");
                    quizForm.id = "quizForm";
                    quizPage.document.getElementById("questions").appendChild(quizForm);
                    for (let i = 0; i < questionCount; i++) {
                        var questionHeading = document.createElement("h4");
                        questionHeading.id = "questionHeading";
                        questionHeading.innerHTML = "Question" + " " + (i + 1);
                        var question = document.createElement("div");
                        question.id = "question" + (i + 1);
                        var newline2 = document.createElement("br");
                        var newline4 = document.createElement("br");
                        var ptag = document.createElement("p");
                        var questionText = document.createTextNode(
                            result.quizQuestions[i].question
                        );
                        ptag.appendChild(questionText);
                        question.appendChild(questionHeading);
                        question.appendChild(newline4);
                        question.appendChild(ptag);
                        question.appendChild(newline2);
                        quizPage.document.getElementById("quizForm").appendChild(question);

                        var optionCount = Object.keys(
                            result.quizQuestions[i].options
                        ).length;
                        var options = document.createElement("div");
                        options.id = "question" + (i + 1) + "Options";
                        for (let j = 0; j < optionCount; j++) {
                            var radiobox = document.createElement("input");
                            radiobox.type = "radio";
                            radiobox.id = "q" + (i + 1) + "Option" + (j + 1);
                            radiobox.name = "q" + (i + 1) + "Options";
                            radiobox.value = i + 1;

                            var label = document.createElement("label");
                            label.htmlFor = "q" + (i + 1) + "Option" + (j + 1);

                            var option = document.createTextNode(
                                " " + result.quizQuestions[i].options[j]
                            );
                            label.appendChild(option);

                            var newline = document.createElement("br");
                            var newline3 = document.createElement("br");

                            options.appendChild(radiobox);
                            options.appendChild(label);
                            options.appendChild(newline);
                            options.appendChild(newline3);

                            quizPage.document
                                .getElementById("question" + (i + 1))
                                .appendChild(options);
                        }
                    }
                    var sbDiv = document.createElement("div");
                    sbDiv.id = "submit_button";
                    var submitButton = document.createElement("button");
                    submitButton.innerHTML = "Submit";
                    sbDiv.appendChild(submitButton);
                    quizPage.document.getElementById("quizForm").appendChild(sbDiv);
                });
                modal.style.display = "none";
            });
            btnCancel1.addEventListener("click", function() {
                modal.style.display = "none";
            });
        });
    });
}

if (btnEngineering2) {
    // call back function from fetchMongoData (necessary for async functions)/
    fetchCIS01().then(function(result) {
        btnEngineering2.addEventListener("click", function() {
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
                    var questionCount = Object.keys(result.quizQuestions).length;
                    var quizForm = document.createElement("form");
                    quizForm.id = "quizForm";
                    quizPage.document.getElementById("questions").appendChild(quizForm);
                    for (let i = 0; i < questionCount; i++) {
                        var questionHeading = document.createElement("h4");
                        questionHeading.id = "questionHeading";
                        questionHeading.innerHTML = "Question" + " " + (i + 1);
                        var question = document.createElement("div");
                        question.id = "question" + (i + 1);
                        var newline2 = document.createElement("br");
                        var newline4 = document.createElement("br");
                        var ptag = document.createElement("p");
                        var questionText = document.createTextNode(
                            result.quizQuestions[i].question
                        );
                        ptag.appendChild(questionText);
                        question.appendChild(questionHeading);
                        question.appendChild(newline4);
                        question.appendChild(ptag);
                        question.appendChild(newline2);
                        quizPage.document.getElementById("quizForm").appendChild(question);

                        var optionCount = Object.keys(
                            result.quizQuestions[i].options
                        ).length;
                        var options = document.createElement("div");
                        options.id = "question" + (i + 1) + "Options";
                        for (let j = 0; j < optionCount; j++) {
                            var radiobox = document.createElement("input");
                            radiobox.type = "radio";
                            radiobox.id = "q" + (i + 1) + "Option" + (j + 1);
                            radiobox.name = "q" + (i + 1) + "Options";
                            radiobox.value = i + 1;

                            var label = document.createElement("label");
                            label.htmlFor = "q" + (i + 1) + "Option" + (j + 1);

                            var option = document.createTextNode(
                                " " + result.quizQuestions[i].options[j]
                            );
                            label.appendChild(option);

                            var newline = document.createElement("br");
                            var newline3 = document.createElement("br");

                            options.appendChild(radiobox);
                            options.appendChild(label);
                            options.appendChild(newline);
                            options.appendChild(newline3);

                            quizPage.document
                                .getElementById("question" + (i + 1))
                                .appendChild(options);
                        }
                    }
                    var sbDiv = document.createElement("div");
                    sbDiv.id = "submit_button";
                    var submitButton = document.createElement("button");
                    submitButton.innerHTML = "Submit";
                    sbDiv.appendChild(submitButton);
                    quizPage.document.getElementById("quizForm").appendChild(sbDiv);
                });
                modal.style.display = "none";
            });
            btnCancel1.addEventListener("click", function() {
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
                    var questionCount = Object.keys(result.quizQuestions).length;
                    var quizForm = document.createElement("form");
                    quizForm.id = "quizForm";
                    quizPage.document.getElementById("questions").appendChild(quizForm);
                    for (let i = 0; i < questionCount; i++) {
                        var questionHeading = document.createElement("h4");
                        questionHeading.id = "questionHeading";
                        questionHeading.innerHTML = "Question" + " " + (i + 1);
                        var question = document.createElement("div");
                        question.id = "question" + (i + 1);
                        var newline2 = document.createElement("br");
                        var newline4 = document.createElement("br");
                        var ptag = document.createElement("p");
                        var questionText = document.createTextNode(
                            result.quizQuestions[i].question
                        );
                        ptag.appendChild(questionText);
                        question.appendChild(questionHeading);
                        question.appendChild(newline4);
                        question.appendChild(ptag);
                        question.appendChild(newline2);
                        quizPage.document.getElementById("quizForm").appendChild(question);

                        var optionCount = Object.keys(
                            result.quizQuestions[i].options
                        ).length;
                        var options = document.createElement("div");
                        options.id = "question" + (i + 1) + "Options";
                        for (let j = 0; j < optionCount; j++) {
                            var radiobox = document.createElement("input");
                            radiobox.type = "radio";
                            radiobox.id = "q" + (i + 1) + "Option" + (j + 1);
                            radiobox.name = "q" + (i + 1) + "Options";
                            radiobox.value = i + 1;

                            var label = document.createElement("label");
                            label.htmlFor = "q" + (i + 1) + "Option" + (j + 1);

                            var option = document.createTextNode(
                                " " + result.quizQuestions[i].options[j]
                            );
                            label.appendChild(option);

                            var newline = document.createElement("br");
                            var newline3 = document.createElement("br");

                            options.appendChild(radiobox);
                            options.appendChild(label);
                            options.appendChild(newline);
                            options.appendChild(newline3);

                            quizPage.document
                                .getElementById("question" + (i + 1))
                                .appendChild(options);
                        }
                    }
                    var sbDiv = document.createElement("div");
                    sbDiv.id = "submit_button";
                    var submitButton = document.createElement("button");
                    submitButton.innerHTML = "Submit";
                    sbDiv.appendChild(submitButton);
                    quizPage.document.getElementById("quizForm").appendChild(sbDiv);
                });
                modal.style.display = "none";
            });
            btnCancel1.addEventListener("click", function() {
                modal.style.display = "none";
            });
        });
    });
}

//functions to load quiz descriptions
//history quiz 1
let HST01 = document.getElementById("HST01");
if(HST01){
    fetchHST01().then(function(results){
        //get quiz name
        const title = document.getElementById("title");
        const quizName = document.createTextNode(results.category + "-" + results.quizName + " Quiz");
        title.appendChild(quizName);
        //get description
        const description = document.getElementById("description");
        const quizDescription = document.createTextNode("Description: " + results.description);
        description.appendChild(quizDescription);
        //get number of questions
        const numQuestions = document.getElementById("numQuestions");
        const number = document.createTextNode("Questions: " + Object.keys(results.quizQuestions).length);
        numQuestions.appendChild(number);
        //get total points
        const totalPoints = document.getElementById("totalPoints");
        const quizPoints = document.createTextNode("Total Points: " + results.totalPoints + " Pts");
        totalPoints.appendChild(quizPoints);

        
    });

}

//science quiz 1
let SCI01 = document.getElementById("SCI01");
if(SCI01){
    fetchSCI01().then(function(results){
        //get quiz name
        const title = document.getElementById("title");
        const quizName = document.createTextNode(results.category + "-" + results.quizName + " Quiz");
        title.appendChild(quizName);
        //get description
        const description = document.getElementById("description");
        const quizDescription = document.createTextNode("Description: " + results.description);
        description.appendChild(quizDescription);
        //get number of questions
        const numQuestions = document.getElementById("numQuestions");
        const number = document.createTextNode("Questions: " + Object.keys(results.quizQuestions).length);
        numQuestions.appendChild(number);
        //get total points
        const totalPoints = document.getElementById("totalPoints");
        const quizPoints = document.createTextNode("Total Points: " + results.totalPoints + " Pts");
        totalPoints.appendChild(quizPoints);

        
    });

}
// emngineering quiz 1
let MEC01 = document.getElementById("MEC01");
if(MEC01){
    fetchMEC01().then(function(results){
        //get quiz name
        const title = document.getElementById("title");
        const quizName = document.createTextNode(results.category + "-" + results.quizName + " Quiz");
        title.appendChild(quizName);
        //get description
        const description = document.getElementById("description");
        const quizDescription = document.createTextNode("Description: " + results.description);
        description.appendChild(quizDescription);
        //get number of questions
        const numQuestions = document.getElementById("numQuestions");
        const number = document.createTextNode("Questions: " + Object.keys(results.quizQuestions).length);
        numQuestions.appendChild(number);
        //get total points
        const totalPoints = document.getElementById("totalPoints");
        const quizPoints = document.createTextNode("Total Points: " + results.totalPoints + " Pts");
        totalPoints.appendChild(quizPoints);

        
    });

}
// engineering quiz 2
let CIS01 = document.getElementById("CIS01");
if(CIS01){
    fetchCIS01().then(function(results){
        //get quiz name
        const title = document.getElementById("title2");
        const quizName = document.createTextNode(results.category + "-" + results.quizName + " Quiz");
        title.appendChild(quizName);
        //get description
        const description = document.getElementById("description2");
        const quizDescription = document.createTextNode("Description: " + results.description);
        description.appendChild(quizDescription);
        //get number of questions
        const numQuestions = document.getElementById("numQuestions2");
        const number = document.createTextNode("Questions: " + Object.keys(results.quizQuestions).length);
        numQuestions.appendChild(number);
        //get total points
        const totalPoints = document.getElementById("totalPoints2");
        const quizPoints = document.createTextNode("Total Points: " + results.totalPoints + " Pts");
        totalPoints.appendChild(quizPoints);

        
    });

}