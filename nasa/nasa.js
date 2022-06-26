fetch('https://api.nasa.gov/planetary/apod?api_key=2xSlmnDgg7BoVPdhfuQhrtAEaa4vMCPu7Kn7AH3v')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.title').innerText = data.title;
        document.querySelector('.img').src = data.hdurl;
        document.querySelector('.date').innerText = 'Day: ' + data.date;
        document.querySelector('.decription').innerText = data.explanation;
    })

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=1YfynT7Z0RlOiBTZLwzYdOZ4SfuWFNhXw6dE4pbm')
    .then(response => response.json())
    .then(data => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(data.photos[i].img_src);
        }
        arr.forEach((item) => {
            let img = document.createElement('img');
            img.src = item;
            document.querySelector('.marsrover-photos').appendChild(img);
        })
    })