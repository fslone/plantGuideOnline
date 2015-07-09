var page = (function() {
  
  /**
    * Initialize the  page
    *
    * @author Fleming Slone [fslone@gmail.com]
   */
  function _init() {

    var app,
        homePageContent,
        content;

    app = angular.module("plantGuide", []);

    app.controller("ContentController", function() {
      this.content = content; 
    });

    app.controller("HeadController", function() {
      this.title = "Plant Tips by State - Plant Guide Online";
      this.description = "Plant Guide Online - learn what grows best in your town to help sculpt lush gardens and grow gorgeous houseplants right away."; 
    });
  
    content = {
      headline: "Find The Right Plants For Your State's Climate",
      paragraph1: "Choose your state below to find the best plants to grow both indoors and outdoors for your local climate. We feature a wide variety of plant suggestions and growing tips to get started growing right away!",
      paragraph2: "Learn how to grow lush flowers in your yard, how to grow hydroponic vegetable and herbs indoors, plus so much more. Take a look at all of the different planting options that will make your home really shine with lush plants for any time of year.",
      paragraph3: "Get started by selecting your state above. We have years' worth of records, averages, and temperature information to find you exactly what plants will grow best in your state's state climate. By studying and factoring in your growing zone, latitude, longitude, historical average almanac temperatures and more, let the PlantGuideOnline.com show you the best plants for your state's climate to get you up and growing quickly and easily this season, whether you are an amateur gardener, a seasoned horticulturalist, or just getting started.",
      hasLocation: false
    };
  }

  /**
    * Bind UI elements for the  page
    *
    * @author Fleming Slone [fslone@gmail.com]
   */
  function _bindUI() {

  
  }

  _init();

  return {
    init: _init,
    bindUI: _bindUI
  }

}());
