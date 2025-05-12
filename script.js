function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
  }

  const txt = document.querySelector("alt")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Luiz Gustavo sorrindo, usando óculos escuros e camisa, bigode e fundo adverso"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Luiz Gustavo sorrindo, usando óculos e camisa, bigode e fundo adverso"
    )
  }
}
