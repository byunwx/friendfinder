# friendfinder
* Answer a few basic questions.
* Then find the friend with the greatest compatibility!
## Technology used
* html, css, javascript
* Jquery
* express.js
* node.js
* bootstrap
## User Input
* user name
* user picture
* 10 question servey
## Newly learned skill
```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```
will provide the data transfer to encode in javacript language instead of java context
```javascript
array = ['aray', 'stuff'] vs arrat[]= ['array', 'stuff']
```
## javascript to rander user output
```javascript
app.post("/api/friends", function(req, res) {

newSurvey= req.body;

surveyData.push(newSurvey);

var surveyComplier=[];
for (var i = 0; i < surveyData.length-2; i++) {
  var difference=0;
  for (var z = 0; z < surveyData[i].scores.length-1; z++) {
    difference+=Math.abs(surveyData[i].scores[z]-surveyData[surveyData.length-1].scores[z]);
  }
  surveyComplier.push(difference);
}
var minDifference=Math.min(...surveyComplier);
//if there is more than one answer program will choose it by random instead of first or the last answer
var indexMins=[];
for (var i = 0; i < surveyComplier.length-1; i++) {
  if(surveyComplier[i]==minDifference){
    indexMins.push(i);
  }
};
var sendData= surveyData[indexMins[Math.floor(Math.random()*indexMins.length)]];
res.json(sendData);
```
## things to improve
* different contant for survey
* apply to real life problem
