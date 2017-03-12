 var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexYub = /^\/yubnub/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/benice/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/superbowl/; botRegexSh = /^\/shrug/; botRegexWk = /^\/contacts/;
      botRegexRu = /^\/rules/; botRegexYu = /^\/youtube/i; botRegexSc = /^\/schedule/; botRegexSt = /^\/standings/; botRegexFo = /^\/forum/;
      botRegexGoat = /^\/goat/; botRegexZach = /^\/lyin/; botRegexHogan = /^\/boot/i; botRegexHogan2 = /(.*\s+)(.*boot)(\s+.*)/i;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/9f/9f3720469d1ce6c2d20130ed0750935a394df80ffcddec6d16e091d95efea854.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://teesbox.com/image/cache/data/be-nice-or-fuck-off/be-nice-or-fuck-off-346x410.png");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/mwo17/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexRu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/rules");
    this.res.end();
  }
  else if(request.text && botRegexYu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/results?lclk=channel&filters=channel&search_query="+request.text.substring(9,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/standings/league");
    this.res.end();
  }
    else if(request.text && botRegexSc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/schedules");
    this.res.end();
  }
      else if(request.text && botRegexFo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mwo17/forum/");
    this.res.end();
  }
         else if(request.text && botRegexGoat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://sports.cbsimg.net/images/visual/whatshot/111415_StephTracker.jpg");
    this.res.end();
  }
        else if(request.text && botRegexZach.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/512x512.png.86ad47f7c7204f2fad46b78069c2cff0.large");
    this.res.end();
  }
         else if(request.text && botRegexHogan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.giphy.com/11MhU7NWOigjdK.gif");
    this.res.end();
  }
          else if(request.text && botRegexHogan2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.giphy.com/11MhU7NWOigjdK.gif");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
