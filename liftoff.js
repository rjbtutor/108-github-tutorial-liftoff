// Countdown program (final version)
// Counts down smoothly with a delay

function countdown(start = 10) {
  console.log("Starting countdown...");
  for (let i = start; i >= 1; i--) {
    console.log(i);
  }
  console.log("🚀 Liftoff!");
}

countdown();
