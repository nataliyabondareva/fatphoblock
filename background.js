let enabled = true;
let blockList = ['eight'];

function fideAndHide () {
    document.querySelectorAll('*').forEach(node => {
        node.childNodes.forEach(child => {
          if (child.nodeType === 3) {
            child.nodeValue.includes('Yoga') ? console.log(child) : null
          //  child.nodeValue = 'strong body' : null
          //child.nodeValue = child.nodeValue.replace('fat', '');
         }
        });
      })
}

window.onload = findAndHide();