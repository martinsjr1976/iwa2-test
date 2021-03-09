const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require('./routes'));


// http.createServer((req, res)=>{
//   res.write(users.join("\n")); //display the list of users on the page
// //   res.write(emails.join("\n")); //display the list of emails on the page
//   res.end(); //end the response
// }).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
// let email = [];
(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people");
    console.log(data.results);
    users = data.results.map(user=>user.name);
    // users.push(data.results[i].name);
    // users = data.map(user=>user.name);
    // emails = data.map(email=>email.email);
    // console.log(users, emails)
  } catch(error){
    console.log(error)
  }
})();


app.listen(port, function(err){

    console.log('Listening on port: ' + port);
});

