const url = 'https://qapi.vercel.app/api/random';
let quote = "";
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    let quote = data.quote;
    let author = data.author;
    document.getElementById('quote').innerText = quote;
    document.getElementById('author').innerText = author;    
}

quote = getData();