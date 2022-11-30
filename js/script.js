console.log('Hello World!');

const gameArea = document.getElementById('gameArea');

function getElementP (contentText) {
    let createdElement = document.createElement('p');
    gameArea.append(createdElement);
    createdElement.innerText = contentText;
    return createdElement;
}

for ( let i = 1 ; i < 101 ; i++) {
    getElementP(i);
}