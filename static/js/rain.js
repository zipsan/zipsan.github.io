var makeItRain = function() {
  document.createElement('rain');

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

    increment += randoFiver;

    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 1.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.5' + randoHundo + 's;"></div></div>';
    // backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 1.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.5' + randoHundo + 's;"></div></div>';
  }

  document.getElementsByClassName('rain front-row')[0].insertAdjacentHTML("beforeend", drops);
  //document.getElementsByClassName('rain back-row')[0].insertAdjacentHTML("beforeend", backDrops);
}

if(window.parent.screen.width > 630) {
  setTimeout(makeItRain, 300);
  setTimeout(makeItRain, 800);
  setTimeout(makeItRain, 1300);
  setTimeout(makeItRain, 1800);
}

