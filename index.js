var websitelist = ["https://www.coolmathgames.com/","https://www.crazygames.com/", "https://77games.io/", "https://poki.com/", "https://www.gamesgames.com/", "https://www.hp.com/", "https://sites.google.com/site/unblockedgame76/"]

function pingURL() { 
  
    // The custom URL entered by user 
    var URL = $("#url").val(); 
    var settings = { 
    
      // Defines the configurations 
      // for the request 
      cache: false, 
      dataType: "jsonp", 
      async: true, 
      crossDomain: true, 
      url: URL, 
      method: "GET", 
      headers: { 
        accept: "application/json", 
        "Access-Control-Allow-Origin": "*", 
      }, 
    
      // Defines the response to be made 
      // for certain status codes 
      statusCode: { 
        200: function (response) { 
          console.log("Status 200: Page is up!"); 
          document.getElementById("ping-result").innerHTML = URL +": Ping Successful";
        }, 
        400: function (response) { 
          console.log("Status 400: Page is down."); 
          document.getElementById("ping-result").innerHTML = URL +": Ping Failed";
        }, 
        0: function (response) { 
          console.log("Status 0: Page is down."); 
          document.getElementById("ping-result").innerHTML = URL +": Ping Failed";
        }, 
      }, 
    }; 
    
    // Sends the request and observes the response 
    $.ajax(settings).done(function (response) { 
      console.log(response); 
    }); 
  } 

  function pingURLcust(URL) { 
  
    // The custom URL entered by user  
    var settings = { 
    
      // Defines the configurations 
      // for the request 
      cache: false, 
      dataType: "jsonp", 
      async: true, 
      crossDomain: true, 
      url: URL, 
      method: "GET", 
      headers: { 
        accept: "application/json", 
        "Access-Control-Allow-Origin": "*", 
      }, 
    
      // Defines the response to be made 
      // for certain status codes 
      statusCode: { 
        200: function (response) { 
          console.log("Status 200: Page is up!"); 
          document.getElementById("mass-ping-result").innerHTML = document.getElementById("mass-ping-result").innerHTML + "<br>" + URL;
        }, 
        400: function (response) { 
          console.log("Status 400: Page is down."); 
          
        }, 
        0: function (response) { 
          console.log("Status 0: Page is down."); 
          
        }, 
      }, 
    }; 
    
    // Sends the request and observes the response 
    $.ajax(settings).done(function (response) { 
      console.log(response); 
    }); 
  } 

  function pingAll() {
    for (let i = 0; i < websitelist.length; i++) {
      pingURLcust(websitelist[i]);
    }
    console.log(document.getElementById("mass-ping-result").innerHTML)
  }