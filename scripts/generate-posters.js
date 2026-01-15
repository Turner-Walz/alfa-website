/**
 * Generate poster images from video files
 * This script uses canvas to extract frames from videos
 * Run with: node scripts/generate-posters.js
 */

const fs = require('fs');
const path = require('path');

// Since ffmpeg is not available, we'll create a simple HTML file
// that can be opened in a browser to generate posters

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Poster Generator</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #18181b;
      color: white;
    }
    h1 {
      color: #fff;
    }
    .video-container {
      margin: 20px 0;
      padding: 20px;
      background: #27272a;
      border-radius: 8px;
    }
    video {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 10px 0;
    }
    canvas {
      max-width: 100%;
      height: auto;
      border: 2px solid #3f3f46;
      margin: 10px 0;
    }
    button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      margin: 5px;
    }
    button:hover {
      background: #2563eb;
    }
    button:disabled {
      background: #52525b;
      cursor: not-allowed;
    }
    .controls {
      margin: 10px 0;
    }
    .info {
      color: #a1a1aa;
      font-size: 14px;
      margin: 10px 0;
    }
    .success {
      color: #22c55e;
      font-weight: 600;
    }
    input[type="range"] {
      width: 100%;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <h1>Video Poster Generator</h1>
  <p class="info">Use this tool to extract poster frames from your videos. Adjust the time slider to find the perfect frame, then click "Generate Poster" to download.</p>

  <div class="video-container">
    <h3>NARF Clinic</h3>
    <video id="video1" controls>
      <source src="/videos/NARF-clinic.mp4" type="video/mp4">
    </video>
    <div class="controls">
      <input type="range" id="slider1" min="0" max="100" value="5" step="0.1">
      <button onclick="generatePoster('video1', 'canvas1', 'narf.jpg')">Generate Poster</button>
      <button onclick="seekToTime('video1', 'slider1', 1)">1s</button>
      <button onclick="seekToTime('video1', 'slider1', 2)">2s</button>
      <button onclick="seekToTime('video1', 'slider1', 3)">3s</button>
    </div>
    <canvas id="canvas1"></canvas>
  </div>

  <div class="video-container">
    <h3>FPV Truck Run</h3>
    <video id="video2" controls>
      <source src="/videos/AnthonysTruck.mp4" type="video/mp4">
    </video>
    <div class="controls">
      <input type="range" id="slider2" min="0" max="100" value="5" step="0.1">
      <button onclick="generatePoster('video2', 'canvas2', 'fpv-truck.jpg')">Generate Poster</button>
      <button onclick="seekToTime('video2', 'slider2', 1)">1s</button>
      <button onclick="seekToTime('video2', 'slider2', 2)">2s</button>
      <button onclick="seekToTime('video2', 'slider2', 3)">3s</button>
    </div>
    <canvas id="canvas2"></canvas>
  </div>

  <div class="video-container">
    <h3>Montage Collection</h3>
    <video id="video3" controls>
      <source src="/videos/montagevideo.mp4" type="video/mp4">
    </video>
    <div class="controls">
      <input type="range" id="slider3" min="0" max="100" value="5" step="0.1">
      <button onclick="generatePoster('video3', 'canvas3', 'montage.jpg')">Generate Poster</button>
      <button onclick="seekToTime('video3', 'slider3', 1)">1s</button>
      <button onclick="seekToTime('video3', 'slider3', 2)">2s</button>
      <button onclick="seekToTime('video3', 'slider3', 3)">3s</button>
    </div>
    <canvas id="canvas3"></canvas>
  </div>

  <script>
    // Setup sliders
    ['video1', 'video2', 'video3'].forEach((videoId, index) => {
      const video = document.getElementById(videoId);
      const slider = document.getElementById('slider' + (index + 1));
      
      video.addEventListener('loadedmetadata', () => {
        slider.max = video.duration;
      });

      slider.addEventListener('input', (e) => {
        video.currentTime = e.target.value;
      });

      video.addEventListener('timeupdate', () => {
        slider.value = video.currentTime;
      });
    });

    function seekToTime(videoId, sliderId, time) {
      const video = document.getElementById(videoId);
      const slider = document.getElementById(sliderId);
      video.currentTime = time;
      slider.value = time;
    }

    function generatePoster(videoId, canvasId, filename) {
      const video = document.getElementById(videoId);
      const canvas = document.getElementById(canvasId);
      const ctx = canvas.getContext('2d');

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Poster generated! Save it to public/posters/' + filename);
      }, 'image/jpeg', 0.95);
    }
  </script>
</body>
</html>`;

// Write the HTML file
const outputPath = path.join(__dirname, '..', 'poster-generator.html');
fs.writeFileSync(outputPath, htmlContent);

console.log('✅ Poster generator created!');
console.log('📁 Location: poster-generator.html');
console.log('');
console.log('To use:');
console.log('1. Start your Next.js dev server: npm run dev');
console.log('2. Open http://localhost:3000/poster-generator.html in your browser');
console.log('3. Use the sliders to find good frames');
console.log('4. Click "Generate Poster" to download each image');
console.log('5. Save the downloaded images to public/posters/');
console.log('');
console.log('Required poster filenames:');
console.log('  - narf.jpg');
console.log('  - fpv-truck.jpg');
console.log('  - montage.jpg');
