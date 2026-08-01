function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function journey() {
  console.log("🏁 The journey begins...");
  await delay(2000);
  console.log("⏰ You arrive after 2 seconds.");
}