/*
 * Name: Jackson Hart
 * Email: hartjack@oregonstate.edu
 */

function createTwit(text, author) {
    var twitArticle = document.createElement('article')
    twitArticle.classList.add('twit')
    
    var twitIcon = document.createElement('div')
    twitIcon.classList.add('twit-icon')
    twitArticle.appendChild(twitIcon)

    var bullhorn = document.createElement('i')
    bullhorn.classList.add('fas')
    bullhorn.classList.add('fa-bullhorn')
    twitIcon.appendChild(bullhorn)

    var twitText = document.createElement('p')
    twitText.classList.add('twit-text')
    twitText.textContent = text

    var twitAuthor = document.createElement('p')
    twitAuthor.classList.add('twit-author')
    twitAuthor.textContent = author

    var twitContent = document.createElement('div')
    twitContent.classList.add('twit-content')
    twitContent.appendChild(twitText)
    twitContent.appendChild(twitAuthor)
    twitArticle.appendChild(twitContent)

    var twitContainers = document.getElementsByClassName('twit-container')

    for (var i = 0; i < twitContainers.length; i++) {
        twitContainers[i].appendChild(twitArticle)
    }
}

function addTwitHandler() {
    var modalBackdrop = document.getElementById('modal-backdrop')
    var createTwitModal = document.getElementById('create-twit-modal')

    modalBackdrop.classList.remove('hidden')
    createTwitModal.classList.remove('hidden')
}

function twitCreateHandler() {
    var twitContent = document.getElementById('twit-text-input').value
    var twitAuthor = document.getElementById('twit-attribution-input').value

    if (twitContent == '' || twitAuthor == '') {
        alert('Both fields need to be filled!')
        return
    }

    createTwit(twitContent, twitAuthor)
    closeTwitCreateHandler()
}

function closeTwitCreateHandler() { 
    document.getElementById('twit-text-input').value = ''
    document.getElementById('twit-attribution-input').value = ''
    document.getElementById('modal-backdrop').classList.add('hidden')
    document.getElementById('create-twit-modal').classList.add('hidden')
}

var createButton = document.getElementById('create-twit-button')
var closeButtons = document.getElementsByClassName('modal-close-button')
var cancelButtons = document.getElementsByClassName('modal-cancel-button')
var acceptButtons = document.getElementsByClassName('modal-accept-button')

createButton.addEventListener('click', addTwitHandler)

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', closeTwitCreateHandler)
}

for (var i = 0; i < cancelButtons.length; i++) {
    cancelButtons[i].addEventListener('click', closeTwitCreateHandler)
}

for (var i = 0; i < acceptButtons.length; i++) {
    acceptButtons[i].addEventListener('click', twitCreateHandler)
}