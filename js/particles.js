(() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particlesArray;

  // get mouse position
  let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80),
  };

  window.addEventListener("mousemove", function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  // create particle
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      (this.x = x),
        (this.y = y),
        (this.directionX = directionX),
        (this.directionY = directionY),
        (this.size = size),
        (this.color = color);
    }
    // method to draw particles
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = "rgba(60,64,198,.2)";
      ctx.fill();
    }

    // check particle position, check mouse position, move particle, draw particle
    update() {
      // check if particle is within canvas
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }
      
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;

      // move particles
      this.x += this.directionX;
      this.y += this.directionY;
      // draw particles
      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 19000;
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      let directionX = Math.random() * 4 - 2;
      let directionY = Math.random() * 4 - 2;
      let color = "#f53b57";

      particlesArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }

  window.addEventListener("resize", function() {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
    mouse.radius = (canvas.height / 80) * (canvas.height / 80);
  });

  function connect() {
    let opacityVal = 0.5;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let distance =
          (particlesArray[a].x - particlesArray[b].x) *
            (particlesArray[a].x - particlesArray[b].x) +
          (particlesArray[a].y - particlesArray[b].y) *
            (particlesArray[a].y - particlesArray[b].y);
        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          opacityVal = 0.5 - distance / 30000;
          ctx.strokeStyle = `rgba(245,59,87,${opacityVal})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  window.addEventListener("mouseout", function() {
    mouse.x = undefined;
    mouse.y = undefined;
  });

  init();
  animate();
})()
