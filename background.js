let enabled = true;
let blockList = ['oga', 'OGA'];
let linksToBlock = []

function findAndHide() {
  let matches = Array.from(document.getElementsByTagName("ytd-video-renderer"));
  for (let match of matches) {
    console.log(match);
    if(match.querySelector("#video-title > yt-formatted-string").innerHTML.includes('oga'))
    {
      match.remove();
    }
  }
}

window.onload = findAndHide();