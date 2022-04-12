// jQuery [
// Function to load the navigation bar onto #main-menu id tag in html files.
console.log("CALLED SCRIPT.JS");
$(function() {
    $("#main-menu").load("common/navbar.html");
});
// Function to load the footer bar onto #footer id tag in html files.
$(function() {
    $("#footer").load("common/footer.html");
});
// Function to load the header bar onto #header id tag in html files.
$(function() {
    $("#header").load("common/header.html");
}); 
//Function to load confirmation for quiz and redirect to quiz page)
$('#confirmStart').on('click',async() => {
    let confirmAction = confirm("You're about to take a quiz.");
    if (confirmAction) {
        window.open("quizPage.html");
    } else {
        alert("Action canceled");
    }
})

// End of jQuery ]
