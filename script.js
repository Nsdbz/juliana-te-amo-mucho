const canvas = document.getElementById("particulas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particulas = []

class Particula {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = Math.random() * 6 + 2
        this.speed = Math.random() * 1 + 0.5
        this.opacity = Math.random()
    }

    update() {
        this.y -= this.speed
        if (this.y < -10) {
            this.y = canvas.height + 10
        }
    }

    draw() {
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
    }
}

function crearParticulas() {
    for (let i = 0; i < 120; i++) {
        particulas.push(new Particula())
    }
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particulas.forEach(p => {
        p.update()
        p.draw()
    })
    requestAnimationFrame(animar)
}

crearParticulas()
animar()

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
