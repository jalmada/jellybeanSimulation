var testJelly = function(n,verbose)
{

  var results = [];
  results[0] = 0;
  results[1] = 0;
  for(var i = 0; i < n; i++)
  {
    if(verbose)console.log("=============== Run " + (i + 1) + "===============================");

    var jellybeans = [];
    jellybeans[0] = parseInt(Math.random() * 10) % 2;
    jellybeans[1] = jellybeans[0] == 0 ? 1 : parseInt(Math.random() * 10) % 2;
    jellybeans[2] = jellybeans[0] == 1 &&  jellybeans[1] == 1 ? 0 : 1;

    var selector = parseInt(Math.random() * 10) % 3;

    if(verbose)console.log("Participant selects Jelly " + selector);

    var hostSelection = 0;
    for(var x = 0; x < jellybeans.length; x++)
    {
      if(selector == x) continue;
      if(jellybeans[x] == 1)
      {
        hostSelection = x;
        break;
      }
    }

    if(verbose)console.log("Host says jellybean no. " + hostSelection + " is poisoned");

    var switchedToJellybean = 0;
    for (var x = 0; x < jellybeans.length; x++)
    {
      if(x == selector) continue;
      if(x == hostSelection) continue;
      switchedToJellybean = x;
      break;
    }

    if(verbose)console.log("User switches to " + switchedToJellybean);
    if(verbose)console.log("The jellybean is: " + (jellybeans[switchedToJellybean] == 0 ? "Good" : "Poisoned"));
    if(verbose)console.log("========================================================");
		var summary = "Selected: " + selector + " Host Poisoned: " + hostSelection + " Switched To: " + switchedToJellybean + " Result: " + (jellybeans[switchedToJellybean] == 0 ? "Good" : "Poisoned");

    if(!verbose) console.log(summary);
    document.getElementById("results").innerHTML += (summary + "<br>");
    results[jellybeans[switchedToJellybean]]++;
  }


  var resultSummary = "Final Results: Alive: " + results[0] + " Dead: " + results[1];
  console.log(resultSummary);
  document.getElementById("results").innerHTML += (resultSummary + "<br>");
}

testJelly(200, false);
