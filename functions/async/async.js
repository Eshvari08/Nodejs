async function gatherData() {
  return "The data is yours";
}
gatherData().then(console.log);

async function greet() {
  return "Hello, World!";
}

greet().then(console.log);

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  return data;
}