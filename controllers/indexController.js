// requiring google api and creating custom google search instance
var google = require('googleapis');
var customsearch = google.customsearch('v1');

var CX = process.env.CX;
var API_KEY = process.env.API_KEY;


exports.serveIndex = function(req, res, next) {
  //TODO: create the correct params
  var SEARCH = 'Cat';
   //making the call to custom search
   
   //TODO: create a options object with all the params
   customsearch.cse.list({ cx: CX, q: SEARCH, auth: API_KEY, searchType:'image', num: 10 }, function(err, resp) {
      if (err) {
        console.log('An error occured', err);
        return;
      }
      // Got the response from custom search
      console.log('Result: ' + resp.searchInformation.formattedTotalResults);
      if (resp.items && resp.items.length > 0) {
        console.log('First results are in!');
        // TODO: get the right info from the response
        resp.items.forEach(function(item){
            console.log(item.snippet);
        })
      }
    });
    
    res.render('index', { title: 'Express' }); 
};