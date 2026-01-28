// 🌸 TEXTO CON EFECTO DE ESCRITURA
const text = "Juliana, te amo muchísimo.\n\nCada latido, cada pensamiento y cada sonrisa mía te tienen a ti como destino. Eres mi lugar seguro, mi alegría tranquila y mi razón favorita para sonreír. 💖"
const messageEl = document.getElementById("message")

let i = 0
function typeText() {
  if (i < text.length) {
    messageEl.textContent += text[i]
    i++
    setTimeout(typeText, 45)
  }
}
typeText()

// ✨ PARTÍCULAS SUAVES
const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particles = []

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    opacity: Math.random()
  })
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach(p => {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
    ctx.fill()

    p.x += p.dx
    p.y += p.dy

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1
  })

  requestAnimationFrame(animateParticles)
}

animateParticles()

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})
