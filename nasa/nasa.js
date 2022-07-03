fetch('https://api.nasa.gov/planetary/apod?api_key=2xSlmnDgg7BoVPdhfuQhrtAEaa4vMCPu7Kn7AH3v')
.then(response => response.json())
.then(data => {
        document.querySelector('.title').innerText = data.title;
        document.querySelector('.img').src = data.hdurl;
        document.querySelector('.date').innerText = 'Day: ' + data.date;
        document.querySelector('.decription').innerText = data.explanation;
})

