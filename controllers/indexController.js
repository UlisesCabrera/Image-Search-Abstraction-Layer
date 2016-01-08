// requiring google api and creating custom google search instance
var google = require('googleapis');
var customsearch = google.customsearch('v1');
var CX = process.env.CX;
var API_KEY = process.env.API_KEY;

// requiring db
var mongoose = require('mongoose');
var Searchs = mongoose.model('Search');



exports.serveIndex = function(req, res, next) {
    res.render('index', { title: 'Express' }); 
};


exports.findImages = function(req, res, next){
    //TODO: save search term to the database.
    
    var query =  req.params.query;
    var resArray = [];
    
    // if the offset was not specified, start on 1.
    var offset = parseInt(req.query.offset, 10) * 10 | 1;
    
    var options = { 
        cx: CX, 
        q: query, 
        auth: API_KEY, 
        searchType:'image', 
        num: 10, 
        start: offset 
    };
    
    
    //making the call to custom search
    customsearch.cse.list(options, function(err, results) {
      if (err) {
        console.log('An error occured: ', err);
        return;
      }
      
      // Got the response from custom search
      if (results.items && results.items.length > 0) {

        results.items.forEach(function(item){
           
            // pushing object to the array that will be sent as response.
            resArray.push(
                    {   
                        url: item.link,
                        snippet: item.snippet,
                        thumbnail: item.image.thumbnailLink,
                        context: item.image.contextLink
                    }
                );
        });
        // send array of objects as response.
        res.send(resArray);
      }
    });
    
    
};