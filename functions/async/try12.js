async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network issue!');
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Trouble on the quest:', error);
  }
}

fetchData().then(console.log);
