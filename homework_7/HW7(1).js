//Task 1
console.log(document.body.querySelector('p').textContent);

//Task 2
console.log( nodeInfo(document.body) );

function nodeInfo(node) {
    let result = {};

    result.nodeType = node.nodeType;
    result.nodeName = node.nodeName;
    result.childNodesAmount = node.childNodes.length;

    return result;
}

//Task 3
console.log( getTextFromUl( document.querySelector('ul') ) );

function getTextFromUl(ul) {
    let links = ul.querySelectorAll('a');

    return [].map.call(links, item => item.textContent);
}

//Task 4
replaceTextWith( document.querySelector('p'), '-text-');

function replaceTextWith(p, text) {
    let childNodes = p.childNodes;

    [].forEach.call(childNodes, (item) => {
        if (item.nodeType === 3) item.textContent = text;
    });
}

