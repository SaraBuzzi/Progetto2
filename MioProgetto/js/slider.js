const CARD_SIZE = 15 + 1; //rem
let sliders = document.querySelectorAll(".slider");

var current_cards = [];
var cards_numbers = [];
var sliding_windows = [];

initSliders();

function initSliders() {
    let i = 0;
    for (let slider of sliders) {
        sliding_windows.push(slider.querySelector(".sliding-window"));
        var cards_number = slider.querySelectorAll(".sliding-window > .card").length - Math.ceil(slider.querySelector(".sliding-container").clientWidth / (16 * CARD_SIZE)) + 1; //16px = 1rem
        console.log(cards_number);
        cards_numbers.push(cards_number);
        var current_card = 0;
        current_cards.push(current_card);
        var button_next = slider.querySelector("button.next");
        var button_previous = slider.querySelector("button.previous");
        button_next.setAttribute("data-sliders-index", i);
        button_previous.setAttribute("data-sliders-index", i);
        console.log(button_next);
        i++;
    }

}


function next(button) {
    let i = button.getAttribute("data-sliders-index"); current_cards[i]++;
    if (current_cards[i] >= cards_numbers[i]) {
        button.disabled = true;
    } else {
        sliding_windows[i].style.transform = "translateX(-" + current_cards[i] * CARD_SIZE + "rem)";
    }
}

function previous(button) {
    let i = button.getAttribute("data-sliders-index");
    current_cards[i]--;
    if (current_cards[i] < 0) {
        button.disabled = true;
    } else {
        sliding_windows[i].style.transform = "translateX(-" + current_cards[i] * CARD_SIZE + "rem)";
    }
}