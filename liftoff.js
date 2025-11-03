// Countdown program (working async/await version)

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown(start = 5, delay = 500) {
  console.log("Starting countdown...");

  for (let i = start; i >= 1; i--) {
    console.log(i);
    await wait(delay); // ✅ waits properly between numbers
  }

  console.log("🚀 Liftoff!");
}

countdown();
