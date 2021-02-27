var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = "" + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset = nAgt.indexOf("Opera")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 6);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
  var majorVersion = parseInt("" + fullVersion, 10);
  if (majorVersion < 66) {
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
  } else {
    var elems = document.getElementsByClassName("card__warning");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "flex";
    }
    document.getElementsByClassName("warning__container")[0].style.height ="0px";
  }
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
  browserName = "Microsoft Internet Explorer";
  fullVersion = nAgt.substring(verOffset + 5);
  var majorVersion = parseInt("" + fullVersion, 10);
  if (majorVersion <= 12) {
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
  } else {
    var elems = document.getElementsByClassName("card__warning");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "block";
    }
  }
}

// In Chrome, the true version is after "Chrome"
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
  browserName = "Chrome";
  fullVersion = nAgt.substring(verOffset + 7);
  var majorVersion = parseInt("" + fullVersion, 10);
  if (majorVersion < 79) {
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
  } else {
    var elems = document.getElementsByClassName("card__warning");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "flex";
    }
    document.getElementsByClassName("warning__container")[0].style.height ="0px";
  }
}

// In Safari, the true version is after "Safari" or after "Version"
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
  browserName = "Safari";
  fullVersion = nAgt.substring(verOffset + 7);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
  var majorVersion = parseInt("" + fullVersion, 10);
  if (majorVersion < 13.1) {
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
  } else {
    var elems = document.getElementsByClassName("card__warning");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = "flex";
    }
    document.getElementsByClassName("warning__container")[0].style.height ="0px";
  }
}

// In Firefox, the true version is after "Firefox"
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
  browserName = "Firefox";
  fullVersion = nAgt.substring(verOffset + 8);
  var majorVersion = parseInt("" + fullVersion, 10);
  if (majorVersion < 75) {
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
  } else {
    var elems = document.getElementsByClassName("card__warning");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
    var elems = document.getElementsByClassName("section__main");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "flex";
    }
    document.getElementsByClassName("warning__container")[0].style.height ="0px";
  }
}

// In most other browsers, "name/version" is at the end of userAgent
else if (
  (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))
) {
  browserName = nAgt.substring(nameOffset, verOffset);
  fullVersion = nAgt.substring(verOffset + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
    browserName = navigator.appName;
    var majorVersion = parseInt("" + fullVersion, 10);
    if (majorVersion <= 79) {
      console.log("Version " + majorVersion);
    }
  }
}

// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
  fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
  fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt("" + fullVersion, 10);
if (isNaN(majorVersion)) {
  fullVersion = "" + parseFloat(navigator.appVersion);
  majorVersion = parseInt(navigator.appVersion, 10);
}

$.get(
  "https://api.ipdata.co?api-key=test",
  function (response) {
    var IPAddress = response.ip;
    var CountryName = response.country_name;
    var Region = response.region;
    var CityName = response.city;
    var Network = response.asn;
    var TimeVisited = response.time_zone.current_time;
    db.collection("Browser Detials")
      .doc("IP Address : " + IPAddress)
      .set({
        Version: nVer,
        IP: IPAddress,
        Country: CountryName,
        State: Region,
        City: CityName,
        Provider: Network,
        TimeVisited : TimeVisited
      })},"jsonp");