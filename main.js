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


document.getElementById("form-contact").addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    if (validate(name, email, message)) {
        alert("Mensaje enviado")
    }
})


//valida los campos del formulario
const validate = (name, email, message) => {
    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Todos los campos son obligatorios")
        return false
    }
    else if (!validateEmail(email)) {
        email.classList.add("bad-input")
        alert("El email no es valido")
        return false
    }
    else {
        return true
    }
}

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

//skills

//json con las habilidades en las tegnologias puntuaadas del 1 al 10
const skills = 
{
    js: 9,
    react: 7,
    html: 10,
    css: 6,
    Autocad: 4,
    python: 8,
}

const loadSkills = () => {
    const valores = document.getElementById("valores");
    const nameSkills = document.getElementById("name-skills");
    const colores = ["#2596be", "#1352D1", "D65858", "#D9F038", "#6c25be", "#5cd08e", "#3F54BB", "#D65858", "#58D1EC", "#7CEA66"]
    
    for (const e in skills) {
        const skill = document.createElement("div");
        skill.classList.add("skill")
        skill.style.height = (skills[e] * 39) + "px";
        skill.style.backgroundColor = colores[skills[e] - 1];
        valores.appendChild(skill);

        const nameSkill = document.createElement("div");
        nameSkill.innerHTML = e;
        nameSkill.classList.add("skill-name")
        nameSkills.appendChild(nameSkill);
    }

}

loadSkills()