// Countdown program (async attempt)
// Tries to use async/await with setInterval — but doesn't behave as expected

async function countdown(start = 5, delay = 500) {
  console.log("Starting countdown...");

  for (let i = start; i >= 1; i--) {
    console.log(i);
    await setInterval(() => {}, delay); // ❌ setInterval doesn't return a Promise!
  }

  console.log("🚀 Liftoff!");
}

countdown();
