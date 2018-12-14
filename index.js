var mainMenu = document.getElementById('mainMenu')
var menuButton = document.querySelectorAll('.menuItem')

for (i = 1; i< menuButton.length; i++) {
    menuButton[i].addEventListener('click', function (event) {
        event.preventDefault()
        elID = document.querySelector(this.hash)
        elID.classList.toggle('is-active')
        mainMenu.classList.toggle('is-active')
        //console.log(this)
    }, false)
}

close = document.querySelectorAll('.close')

for (c = 0; c< close.length; c++) {
    close[c].addEventListener('click', function (event) {
        event.preventDefault()
        parent = this.parentElement
        //console.log(parent)
        parent.classList.toggle('is-active')
        mainMenu.classList.toggle('is-active')
    }, false)
}