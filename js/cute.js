class Subject {
    constructor(name, path, correct) {
        this.name = name;
        this.path = path;
        this.correct = correct;
        this.smash = null;
    }
}

let image = document.getElementById('image');
let smashbtn = document.getElementById('smash');
let passbtn = document.getElementById('pass');
let heading = document.getElementById('heading');
let result = document.getElementById('result');

let subs = [
    new Subject("Astolfo", "./images/sop/ast.png", true),
    new Subject("Mai Sakurajima", "./images/sop/mai.jpg", true),
    new Subject("Miyuki Shirogane", "./images/sop/pres.webp", false),
    new Subject("Rias Gremory", "./images/sop/rias.webp", false),
    new Subject("The Rock", "./images/sop/rock.jpg", false),
    new Subject("Kaworu Nagisa", "./images/sop/kaw.png", true),
    new Subject("Linus Torvalds", "./images/sop/linus.jpg", false),
    new Subject("Vaporeon", "./images/sop/vap.png", false),
    new Subject("Monika", "./images/sop/monika.jpg", false),
    new Subject("Vladimir Putin", "./images/sop/put.jpg", false),
    new Subject("Yuri", "./images/sop/yuri.webp", true),
    new Subject("Argail Felix", "./images/sop/felix.png", true),
];
let index = 0;

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
shuffle(subs)

function showImage()
{
    image.src = subs[index].path;
    image.alt = subs[index].name;
}

function showResult()
{
    heading.innerHTML = `${heading.innerHTML}<br>Results`;

    let score = 0;

    result.innerHTML += "<ul>";
    subs.forEach(sub => {
        if (sub.smash == sub.correct) score++;
        else score--;

        result.innerHTML += `<li><b>${sub.name}</b>: ${sub.smash ? "Smash" : "Pass"} (correct answer: ${sub.correct ? "Smash" : "Pass"})<br></li>`;
    });
    result.innerHTML += "</ul>";

    if (score > 0) result.innerHTML += "<br><b id='ab_win' class='w'>WIN</b>";
    else if (score < 0) result.innerHTML += "<br><b id='ab_win' class='l'>LOOSE</b>";
    else result.innerHTML += "<br><b id='ab_win' class='d'>DRAW</b>";

    smashbtn.remove();
    passbtn.remove();
}

function con()
{
    index++;
    if (index >= subs.length)
    {
        image.src = "";
        image.alt = "";

        showResult();

        index = -1;
    }
    showImage();
}

document.addEventListener('DOMContentLoaded', () => {
    showImage();
});

smashbtn.addEventListener('click', () => {
    if (index == -1) return;
    subs[index].smash = true;
    con();
});
passbtn.addEventListener('click', () => {
    if (index == -1) return;
    subs[index].smash = false;
    con();
});