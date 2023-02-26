
continueButton = document.querySelector('#continue')
continueButton.addEventListener('click', changeColor)

function changeColor() {
    continueButton.classList.innerText = "Hi"
}