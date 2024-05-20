y = document.getElementById('y');
n = document.getElementById('n');
t = document.getElementById('txt');

class Choice {
    constructor(text, y, n, y_func, n_func) {
        this.text = text;
        this.y = y;
        this.n = n;

        this.y_func = y_func;
        this.n_func = n_func;
    }
}

class Game {
    constructor(start) {
        this.choice = start;
    }
    continue(choice) {
        if (choice == 'y') {
            if (this.choice.y_func != null) this.choice.y_func();
            this.choice = this.choice.y;
        }
        else {
            if (this.choice.n_func != null) this.choice.n_func();
            this.choice = this.choice.n;
        }

        if (this.choice != null) t.innerHTML = this.choice.text;
    }
}

function asc() {
    console.log("You ascended");
}

function dec() {
    console.log("You decended");
}

let ascended = new Choice("You may go to heaven now...", null, null, asc, null);
let decended = new Choice("You must go to hell now...", null, null, dec, null);
let option1 = new Choice("Yes = heaven; No = hell;...", ascended, decended, null, null);

let game = new Game(option1);

y.onclick = () => { game.continue('y'); }
n.onclick = () => { game.continue('n'); }