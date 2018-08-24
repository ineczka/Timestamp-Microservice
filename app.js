var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
 //var cors = require('cors');
//app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204


// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.send("hello");
  //res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/:date_string", function(req,res){
    var date;
    var param = req.params.date_string;
    var regex = /^\d+$/;
    console.log(regex.test(param));
 
   if (param){
     if(regex.test(param)) {
         param = parseInt(param);
     }
     date = new Date(param);
   //console.log(date=="Invalid Date");
  
  // //res.send((new Date(req.params.date_string)).valueOf()+ "valueoff");
    }
    else {
     date = new Date();
    }
    res.send({unix: date.getTime(), utc: date.toUTCString()});
   
});




//listen("/", function(){})  - usuallyclisten take uls and function parameters,
// but when on cloud9 we use enviroment variables as parameters like below

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server started!");
});