var page = (function() {
  
  /**
    * Initialize the  page
    *
    * @author Fleming Slone [fslone@gmail.com]
   */
  function _init() {

    var app,
        homePageContent,
        content,
        stateArr;

    app = angular.module("plantGuide", []);

    app.controller("ContentController", function() {
      this.homePageContent = content; 
      this.states = stateArr;
    });
    
    app.controller("HeadController", function() {
      this.title = "Plant Tips by State - Plant Guide Online";
      this.description = "Plant Guide Online - learn what grows best in your town to help sculpt lush gardens and grow gorgeous houseplants right away."; 
    });

    stateArr = [];

    $.when(_getStates()).then(function(stateList) {
      $.each(stateList.states, function(index, state) {
        stateArr.push({
          id: index,
          name: state
        });
      });
    });

    content = {
      headline: "Find The Right Plants For Your State's Climate",
      paragraph1: "Choose your state below to find the best plants to grow both indoors and outdoors for your local climate. We feature a wide variety of plant suggestions and growing tips to get started growing right away!",
      paragraph2: "Learn how to grow lush flowers in your yard, how to grow hydroponic vegetable and herbs indoors, plus so much more. Take a look at all of the different planting options that will make your home really shine with lush plants for any time of year.",
      paragraph3: "Get started by selecting your state above. We have years' worth of records, averages, and temperature information to find you exactly what plants will grow best in your state's state climate. By studying and factoring in your growing zone, latitude, longitude, historical average almanac temperatures and more, let the PlantGuideOnline.com show you the best plants for your state's climate to get you up and growing quickly and easily this season, whether you are an amateur gardener, a seasoned horticulturalist, or just getting started.",
      hasLocation: false,
      location: "my location",
      plants: [
        {
          name: "Philodendron", 
          description: "Philodendrons are wonderful houseplants that require a moderate amount of water and produce long vines that are great for decoration."
        }, 
        {
          name: "Snake's Tongue", 
          description: "Snake's tongue plants are very hardy and require little water and maintenance."
        }
      ]
    };
    
  }

  /**
    * Bind UI elements for the  page
    *
    * @author Fleming Slone [fslone@gmail.com]
   */
  function _bindUI() {

  
  }

  /**
    * Fetch state information for the application
    *
    * @returns {object} A promise object
    * @author Fleming Slone [fslone@gmail.com]
   */
  function _getStates() {

    var promise,
         url;

    promise = $.Deferred();
    url = "/restapi/GetStates";

    $.ajax({
      cache: false,
      crossDomain: true,
      type: "GET",
      url: url,
      dataType: "text",
      success: function(json) {
        promise.resolve($.parseJSON(json));
      },
      error: function() {
        var errorRow;
        errorRow = _buildErrorRow();
        $(".container").prepend(errorRow);
        promise.resolve();
      }
    });

    /**
    * Add an error message to the page
    *
    * @returns {string} A string of html to be appended to the page container
    * @author Fleming Slone [fslone@gmail.com]
   */
  function _buildErrorRow(error) {
    
    var rowOpen, 
        rowClose, 
        cell1Open, 
        cell1Close, 
        row; 

    rowOpen = "<div class='row'>";
    cell1Open = "<div class='col-xs-12 alert alert-danger'><strong>";
    cell1Close = "</strong></div>";
    rowClose = "</div>";

    row = rowOpen;
    row += cell1Open;
    row += "Sorry, we had a problem fulfilling your request. Please try again."
    row += cell1Close;
    row += rowClose;

    return row;

  }

    return promise;
    
  }


  _init();

  return {
    init: _init,
    bindUI: _bindUI
  }

}());
