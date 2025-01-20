const playAudioButton = document.getElementById('play-audio');
playAudioButton.addEventListener('click', () => {
  const audio = new Audio('data:audio/mpeg;base64,//NEx...'); // Replace with TTS or actual audio file
  audio.play();
});

// Canvas setup/
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 300;

let drawing = false;

// Start drawing
canvas.addEventListener('mousedown', () => (drawing = true));
canvas.addEventListener('mouseup', () => (drawing = false));
canvas.addEventListener('mouseout', () => (drawing = false));
canvas.addEventListener('mousemove', draw);

// Draw on canvas
function draw(e) {
  if (!drawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.fill();
}

// Clear canvas function
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Submit button handler
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  // Convert drawing to data URL for analysis
  const drawingData = canvas.toDataURL();

  // Placeholder for ML backend validation
  validateDrawing(drawingData).then((result) => {
    document.getElementById('result').textContent = result;
    clearCanvas();
  });
});

// Dummy function for validation (replace with ML backend integration)
async function validateDrawing(data) {
  console.log('Drawing data sent to backend:', data);
  // Simulate backend validation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Drawing accepted! You are human.');
    }, 1000);
  });
}
