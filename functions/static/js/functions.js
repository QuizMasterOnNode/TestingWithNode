// fetching app/mongo route. 
async function fetchMongoData(){
    const mongoData = await fetch("app/mongo");
    const responseMongo = await mongoData.text();
    return responseMongo;
}

// call back function from fetchMongoData (necessary for async functions)/
fetchMongoData().then(function (result) {
    document.getElementById("mongoData").innerHTML = result;
});
