const cube = document.getElementById('cube');
const result = document.getElementById('result');
const play = document.getElementById('play');

let hod;
let hody = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    cube.src = `img/kostka${hod}.png`;
}

play.addEventListener('click', () => {
    if (timer == false) {
        timer = setInterval(animace, 100);
        play.innerText = 'Stop';
    } else {
        clearInterval(timer);
        timer = false;
        hody.push(hod);
        result.innerHTML = statistika();
        play.innerText = 'Hraj';
    }
});

function suma() {
    let soucet = 0;
    hody.forEach(function(value) {
        soucet += value;
    });
    return soucet;
}

function max() {
    let maximum = 1;
    hody.forEach(function(value) {
        if (value > maximum) maximum = value;
    });
    return maximum;
}

function min() {
    let minimum = 6;
    hody.forEach(function(value) {
        if (value < minimum) minimum = value;
    });
    return minimum;
}

function statistika() {
    let vysledek = `<p>Aktuální hod: ${hody[hody.length-1]}</p>`;
    vysledek += `<p>Počet hodů: ${hody.length}</p>`;
    vysledek += `<p>Součet hodů: ${suma()}</p>`;
    vysledek += `<p>Průměr hodů: ${(suma()/hody.length).toFixed(2)}</p>`;
    vysledek += `<p>Největší hod: ${max()}</p>`;
    vysledek += `<p>Nejmenší hod: ${min()}</p>`;
    return vysledek;
}