var surveyData = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
newSurvey= req.body;

surveyData.push(newSurvey);
console.log(newSurvey.name);
console.log("---------------");
// console.log(surveyData[surveyData.length-1].scores[1]);
var surveyComplier=[];
for (var i = 0; i < surveyData.length-2; i++) {
  var difference=0;
  for (var z = 0; z < surveyData[i].scores.length-1; z++) {
    difference+=Math.abs(surveyData[i].scores[z]-surveyData[surveyData.length-1].scores[z]);
  }
  surveyComplier.push(difference);
}
var minDifference=Math.min(...surveyComplier);
var indexMins=[];
for (var i = 0; i < surveyComplier.length-1; i++) {
  if(surveyComplier[i]==minDifference){
    indexMins.push(i);
  }
};
var sendData= surveyData[indexMins[Math.floor(Math.random()*indexMins.length)]];
res.json(sendData);
console.log("---------------");
console.log(surveyComplier);
console.log(newSurvey);
console.log(sendData);
console.log("---------------");

  });


};
