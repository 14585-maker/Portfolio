/*
  starfield.js
  ---------------------------------------------------------------
  วาดพื้นหลังท้องฟ้าเคลื่อนไหว (ดาวระยิบระยับ + ดาวตก + พารัลแลกซ์
  ตามเมาส์) ลงบน <canvas id="starfield"> ที่วางไว้ในทุกหน้า
  ไม่ต้องแก้ไฟล์นี้ — ทำงานอัตโนมัติเมื่อโหลดหน้าเว็บ
  ---------------------------------------------------------------
*/
(function () {
  var canvas = document.getElementById('starfield');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var stars = [];
  var shootingStars = [];
  var width, height, dpr;
  var mouseX = 0, mouseY = 0;

  var STAR_COLORS = ['#eef0ff', '#5eead4', '#f2c879', '#e85dc0'];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildStars();
  }

  function buildStars() {
    var count = Math.round((width * height) / 9000);
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        depth: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
      });
    }
  }

  function spawnShootingStar() {
    var startX = Math.random() * width * 0.6 + width * 0.2;
    shootingStars.push({
      x: startX,
      y: -10,
      vx: -3.2 - Math.random() * 2,
      vy: 3.6 + Math.random() * 2,
      life: 1,
      len: 90 + Math.random() * 60
    });
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);

    // stationary/twinkling stars, with a gentle parallax offset from the mouse
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var twinkle = reduceMotion ? 0.85 : 0.6 + 0.4 * Math.sin(t * s.twinkleSpeed + s.twinklePhase);
      var px = s.x + (mouseX - width / 2) * s.depth * 0.02;
      var py = s.y + (mouseY - height / 2) * s.depth * 0.02;

      ctx.beginPath();
      ctx.globalAlpha = twinkle;
      ctx.fillStyle = s.color;
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (!reduceMotion) {
      // shooting stars
      if (Math.random() < 0.006) spawnShootingStar();

      for (var j = shootingStars.length - 1; j >= 0; j--) {
        var sh = shootingStars[j];
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life -= 0.012;

        if (sh.life <= 0 || sh.y > height + 50) {
          shootingStars.splice(j, 1);
          continue;
        }

        var tailX = sh.x - (sh.vx / Math.hypot(sh.vx, sh.vy)) * sh.len;
        var tailY = sh.y - (sh.vy / Math.hypot(sh.vx, sh.vy)) * sh.len;

        var grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        grad.addColorStop(0, 'rgba(238,240,255,' + sh.life + ')');
        grad.addColorStop(1, 'rgba(94,234,212,0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  resize();

  if (reduceMotion) {
    draw(0); // draw a single static frame, no animation loop needed beyond this
  } else {
    requestAnimationFrame(draw);
  }
})();
