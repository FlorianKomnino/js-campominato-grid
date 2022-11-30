console.log('Hello World!');

const gameArea = document.getElementById('gameArea');

function getElementDiv (contentText) {
    let createdElement = document.createElement('div');
    createdElement.innerText = contentText;
    createdElement.classList.add('casella', 'p-2');
    gameArea.append(createdElement);
    return createdElement;
}

for ( let i = 1 ; i < 101 ; i++) {
    getElementDiv(i);
}