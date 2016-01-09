// requiring google api and creating custom google search instance
var google = require('googleapis');
var customsearch = google.customsearch('v1');
var CX = process.env.CX;
var API_KEY = process.env.API_KEY;

// requiring the db.
var mongoose = require('mongoose');
var Searchs = mongoose.model('Search');

exports.serveIndex = function(req, res, next) {
    res.render('index', { title: 'Image Search Abstraction Layer' }); 
};

exports.findImages = function(req, res, next){
    
    // getting query from params and declaring response array.
    var query =  req.params.query;
    var resArray = [];
    
    //save searched query to the database;
    var search = new Searchs();
    search.term = req.params.query;
    search.save(function(err) {
      if (err) {
          res.send({status : 'error saving query : ' + err});
      } else {
          console.log('sucessfully saved term');
      } 
    });

    // if the offset was not specified, start on 1.
    var offset = parseInt(req.query.offset, 10) * 10 | 1;
    
    // options for the custom search api.
    var options = { 
        cx: CX, 
        q: query, 
        auth: API_KEY, 
        searchType:'image', 
        num: 10, 
        start: offset 
    };
    
    //making the call to custom search.
    customsearch.cse.list(options, function(err, results) {
      if (err) {
        console.log('An error occured: ', err);
        return;
      }
      
      // Got the response from custom search.
      if (results.items && results.items.length > 0) {

        results.items.forEach(function(item){
           
            // pushing object to the array that will be send as response.
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

exports.getLatest = function(req, res, next) {
  // declaring response array
  var resArray = [];
  // searching all the queries
  Searchs.find({}, function(err, queries){
    if (err) {
      res.send({status : 'error finding latest queries: ' + err});
    } else {
      // sending just what its required
      queries.forEach(function(query){
        resArray.push({term : query.term, when: query.when});
      });
      res.send(resArray);
    }
  });
};