(function() {
  var restify = require("restify"),
      fs = require("fs");

  var _server;
      
  function _init() {

    _start();
    _registerRestCalls();

  }

  function _start() {
    
    var port, 
        clientDir;
    
    //this is a fix for Heroku
    if(process.env.PORT) {
      port = process.env.PORT;
      clientDir = "client";
    } else {
      port = 3000;
      clientDir = "../client";
    }
    
    //start server
    _server = restify.createServer({
      name: "Search Server",
      version: "0.0.0"
    });

    _server.use(restify.acceptParser(_server.acceptable));
    _server.use(restify.gzipResponse());
    _server.use(restify.jsonBodyParser());
    _server.use(restify.queryParser());
    _server.use(restify.fullResponse());

    //prerender all angular js pages
    _server.use(require('prerender-node'));

    //start listening on specified port
    _server.listen(port);

    _registerRestCalls();

    _server.get(/\/?.*/, restify.serveStatic({
      directory: clientDir,
      default: "index.html"
    }));


  }

  function _registerRestCalls() {

    _server.get("/restapi/GetStates", __getStates);

    _server.get("/restapi/GetTowns", __getTowns);

    _server.get("/restapi/GetGrowingZones", __getGrowingZones);

    function __getStates(req, res, next) {
      
      var states, 
          responseObj;
      
      responseObj = {
        "states": []
      };

      response.states.push("Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming");

      res.send(responseObj);

    }

    function __getTowns(req, res, next) {
      
      var stateId;
      
      stateId = req.params.stateId;

      responseObj = {
        "towns": []
      };

      res.send(responseObj);

    }

    function __getGrowingZones(req, res, next) {
      
      res.send(200);

    }

  }

  return _init();

}());