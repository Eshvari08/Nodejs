async  function fetchdata() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if(!response.ok) throw new Error('Network issue!');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Trouble on the quest:',error);
    }
}
    fetchdata().then(console.log);
