const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple J</title>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Poppins:wght@300;400;500&display=swap');

    body {
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #d7f4e3, #a8e6cf);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }

    .card {
      background: #ffffff;
      padding: 40px 60px;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      text-align: center;
      max-width: 480px;
      opacity: 0;
      transform: scaleY(0);
      transform-origin: top;
      animation: unzip 1s ease-out forwards;
      cursor: pointer;
      perspective: 1000px;
    }

    @keyframes unzip {
      0% {
        opacity: 0;
        transform: scaleY(0);
      }
      60% {
        transform: scaleY(1.1);
      }
      100% {
        opacity: 1;
        transform: scaleY(1);
      }
    }

    .card-inner {
      border-radius: 16px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      will-change: transform;
    }

    .name {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 600;
      color: #2f4f4f;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .line {
      width: 60%;
      height: 2px;
      background: linear-gradient(to right, #a8e6cf, #dcedc1);
      margin: 12px auto 24px;
      border-radius: 1px;
    }

    .section {
      font-weight: 500;
      font-size: 15px;
      color: #4b6b60;
      margin-bottom: 20px;
    }

    .quote {
      font-style: italic;
      font-size: 15px;
      color: #3e574e;
      font-family: 'Playfair Display', serif;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="card" id="card">
    <div class="card-inner">
      <div class="name">Joanne Lorica Legaspi</div>
      <div class="line"></div>
      <div class="section">BSIT SM-4101</div>
      <div class="quote">"Trying is better than doing nothing."</div>
    </div>
  </div>

  <script>
    const card = document.getElementById('card');
    const cardInner = card.querySelector('.card-inner');

    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      cardInner.style.transform = 'rotateX(' + (-rotateX) + 'deg) rotateY(' + rotateY + 'deg)';
      cardInner.style.boxShadow = (-rotateY*2) + 'px ' + (rotateX*2) + 'px 30px rgba(0,0,0,0.25)';
    });

    card.addEventListener('mouseleave', function() {
      cardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
      cardInner.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
    });
  </script>
</body>
</html>`);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
