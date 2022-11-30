console.log('Hello World!');

const gameArea = document.getElementById('gameArea');

//funzione che crea un elemento html
function getElementDiv (contentText) {
    let createdElement = document.createElement('div');
    // il testo contenuto all'interno dell'elemento é l'argomento inserito
    createdElement.innerText = contentText;
    // aggiungo classi casella e p-2
    createdElement.classList.add('casella', 'p-2');
    // appendo l'elemento alla variabile gameArea
    gameArea.append(createdElement);
    return createdElement;
}

// ciclo che esegue la funzione getElementDiv 100 volte, inserendo ogni volta il numero dell'interazione come testo dell'elemento inserito
for ( let i = 1 ; i < 101 ; i++) {
    getElementDiv(i);
}