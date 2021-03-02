const http = require('http');
const axios = require('axios');

http.createServer((req, res)=>{
  res.write(users.join("\n")); //display the list of users on the page
  res.write(emails.join("\n")); //display the list of emails on the page
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
let email = [];
(async function getNames(){
  try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = data.map(user=>user.name);
    emails = data.map(email=>email.email);
    console.log(users, emails)
  } catch(error){
    console.log(error)
  }
})()