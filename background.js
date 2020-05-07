let enabled = true;
let blockList = ['oga'];

function findAndHide () {
    document.querySelectorAll('*').forEach(node => {
        node.childNodes.forEach(child => {
          if (child.nodeType === 3) {
            child.nodeValue.includes('oga') ? console.log(child.nodeValue) : null
         }
        });
      })
}

window.onload = findAndHide();