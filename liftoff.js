// Countdown program (experimental version)
// Adds a timed countdown effect

function countdown(start = 10, delay = 500) {
  console.log("Starting countdown...");

  let i = start;
  let timer = setInterval(() => {
    console.log(i);
    if (i-- <= 1) {
      clearInterval(timer);
      console.log("🚀 Liftoff!");
    }
  }, delay);
}

countdown(10, 300);
