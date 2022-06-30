
fetch('https://raw.githubusercontent.com/007Alena/Week_20/marvel.json')
.then(response => console.log(response.json()))
.catch(err => console.log(err));

document.addEventListener('DOMContentLoaded', function (e) {
    let heroes = JSON.parse(liga);
    let heroesContent = "";

for (hero of heroes) {
    heroesContent += ` <div class = 'hero' style="background: url(${hero.img})">
    <h2>${hero.title}</h2>
    <div class='hero__container'>
            <div class='hero-decription'><span>Вселенная:</span> ${hero.universe}</div>
            <div class='hero-decription'><span>Альтер эго:</span> ${hero.alter}</div>
            <div class='hero-decription'><span>Род деятельности:</span> ${hero.activity}</div>
            <div class='hero-decription'><span>Друзья:</span> ${hero.friends}</div>
            <div class='hero-decription'><span>Суперсилы:</span> ${hero.superpower}</div>
            <div class='hero-decription'><span>Подробнее:</span> ${hero.more}</div>
            <div class='hero-decription'><span>РЕЙТИНГ:</span></div>
        <div class="hero-rating">
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="1">
                <label for="rating-1" class="label">1</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="2">
                <label for="rating-2" class="label">2</label>
                </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="3">
                <label for="rating-3" class="label">3</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="4">
                <label for="rating-4" class="label">4</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="5">
                <label for="rating-5" class="label">5</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="6">
                <label for="rating-6" class="label">6</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="7">
                <label for="rating-7" class="label">7</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="8">
                <label for="rating-8" class="label">8</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="9">
                <label for="rating-9" class="label">9</label>
            </div>
            <div class="hero-rating-block">
                <input type="radio" class="item" name="${hero['name-rating']}" value="10">
                <label for="rating-10" class="label">10</label>
            </div>
        </div>
    </div>`;
    }

    document.querySelector('.liga-heroes').innerHTML = heroesContent;

    for (let hero of heroes) {
        if (localStorage.getItem(`${hero['name-rating']}`)) {
            let rat = localStorage.getItem(`${hero['name-rating']}`);
            document.querySelector(`input[name='${hero['name-rating']}'][value="` + rat + '"]').setAttribute('checked', 'checked');
        }
    }
})

document.querySelector('.button').addEventListener('click', () => {
    let heroes = JSON.parse(liga);

    for (let hero of heroes) {
        let inputs = document.querySelectorAll(`input[name='${hero['name-rating']}']`);

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                localStorage.setItem(`${hero['name-rating']}`, inputs[i].value);
            }
        }
    }
})
