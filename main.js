//carusel
const carusel = document.querySelector(".carousel")
const items = document.querySelectorAll(".item")
const navButtons = document.querySelectorAll(".carousel-nav-button")

let count = 0
let manual = false

//carusel se mueve cada 3 segundos
const moverCarusel = (move) => {
    if (!manual) {
        if (move > 200) {
            resetCorusel()
            move = 0
            navButtons[count].classList.remove("carousel-nav-button-select")
            count = 0
            navButtons[count].classList.add("carousel-nav-button-select")
            setTimeout(() => { moverCarusel(move + 100) }, 3000)
        } else {
            items[0].style.transform = "translateX(-" + move + "%)"
            items[1].style.transform = "translateX(-" + move + "%)"
            items[2].style.transform = "translateX(-" + move + "%)"
            navButtons[count].classList.remove("carousel-nav-button-select")
            navButtons[count + 1].classList.add("carousel-nav-button-select")
            count++
            setTimeout(() => { moverCarusel(move + 100) }, 3000)
        }
    } else {
        manual = false
    }

}

//mueve a una posicion especifica cuando se ejecuta el carusel no se mueve automaticamente
const moverCaruselManual = (move) => {
    items[0].style.transform = "translateX(-" + move + "%)"
    items[1].style.transform = "translateX(-" + move + "%)"
    items[2].style.transform = "translateX(-" + move + "%)"
}

const resetCorusel = () => {
    items[0].style.transform = "translateX(0%)"
    items[1].style.transform = "translateX(100%)"
    items[2].style.transform = "translateX(200%)"
}

navButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        navButtons[count].classList.remove("carousel-nav-button-select")
        button.classList.add("carousel-nav-button-select")
        count = index
        manual = true
        moverCaruselManual(count * 100)
    })
})

setTimeout(() => { moverCarusel(100) }, 3000)

