let enabled = true;
let blockList = ["oga"];
let linksToBlock = [];

function replaceInnerHtml(node) {
  console.log("child2", node);
  // if (node.id = 'contents') {
  // node.style.display = "none"
  // node.remove()
  node.innerHTML = "";
  // }
}

function recursiveFindAndHide(node) {
  if (node && node.id !== "dismissable") {
    replaceInnerHtml(node);
    return recursiveFindAndHide(node.parentNode);
  } else if (node && node.id === "dismissable") {
    return replaceInnerHtml(node);
  }
}

function findAndHide() {
  document.querySelectorAll("*").forEach((node) => {
    node.childNodes.forEach((child) => {
      if (child.nodeValue.includes("oga")) {
        replaceInnerHtml(child);
        return recursiveFindAndHide(child.parentNode);
      }
    });
  });
}

window.onload = findAndHide();