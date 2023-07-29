const themeToggler = document.getElementById("switch")
const avatar = document.getElementById("avatar")
const html = document.documentElement

const toggleColor = () => {
    html.classList.toggle("light")

    if (html.classList.contains("light")) {
        avatar.setAttribute("src", "./src/assets/natan-light.png")
    } else {
        avatar.setAttribute("src", "./src/assets/natan.png")
    }
}