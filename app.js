var day, month;
let d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month = months[d.getMonth()];
if (d.getDate() < 9) {
    day = "0" + d.getDate();
} else {
    day = d.getDate();
}
document.getElementById("date").innerHTML = month + " " + day;
function cover() {
    setTimeout(function () {
        document.getElementById("cover").classList.add("uncover")
    }, 5000)
}

let texts = [
    "New beginnings, innocence, adventure",
    "Willpower, creation, manifestation",
    "Intuitive, unconscious, divine feminine",
    "Femininity, nurturing, fertility, abundance",
    "Authority, structure, a father figure",
    "Spiritual wisdom, tradition, conformity, morality, ethics",
    "Love, harmony, partnerships, choices",
    "Direction, control, willpower, determination, success, action",
    "Strength, courage, compassion, focus, persuasion, influence",
    "Wisdom, soul searching, solitude, spiritual enlightenment, receiving or giving guidance",
    "Chance, destiny and fate, karma, turning points, life cycles",
    "Fairness, integrity, legal disputes, cause and effect, life lessons",
    "Letting go, sacrificing, pausing to reflect, uncertainty, spiritual development",
    "Ending of a cycle, transitions, getting rid of excess, powerful movement, resolutions",
    "Balance, moderation, good health, cooperating with others, finding solutions",
    "Material focus, trapped in bondage, addictions and depression, negative thinking, betrayal",
    "Intense and sudden change, release, painful loss, tragedy, revelation",
    "Hope, renewal, creativity and inspiration, generosity, healing",
    "Fear, anxiety, confusion, delusion, risk",
    "Happiness, fertility, success, optimism, truth"
]

let images = [
    "fool.webp",
    "magician.webp",
    "high_priestess.webp",
    "empress.webp",
    "emperor.webp",
    "hierophant.webp",
    "lovers.webp",
    "chariot.webp",
    "strength.webp",
    "hermit.webp",
    "wheeloffortune.webp",
    "justice.webp",
    "hanged_man.webp",
    "death.webp",
    "temperance.webp",
    "devil.webp",
    "tower.webp",
    "star.webp",
    "moon.webp",
    "sun.webp"
]
$(function () {
    var cards = document.querySelectorAll(".card");
    function getCards() {
        var arr = [];
        var text = [];
        while (arr.length < 3) {
            var r = Math.floor(Math.random() * 20);
            if (arr.indexOf(r) === -1) {
                arr.push(r);
            }
            if (arr.length == 3) {
                for (i = 0; i < cards.length; i++) {
                    var url = "./img/cards/" + images[arr[i]];
                    text.push(texts[arr[i]]);
                    cards[0].addEventListener("click", function () {
                        this.classList.add("active");
                        document.getElementById("text").innerHTML = text[0];
                        document.getElementById("text").classList.add("active");
                    })
                    cards[1].addEventListener("click", function () {
                        this.classList.add("active");
                        document.getElementById("text").innerHTML = text[1];
                        document.getElementById("text").classList.add("active");
                    })
                    cards[2].addEventListener("click", function () {
                        this.classList.add("active");
                        document.getElementById("text").innerHTML = text[2];
                        document.getElementById("text").classList.add("active");
                    })
                    cards[i].children[1].children[0].setAttribute("src", url);
                }
            }
        }
        cover();
    }
    getCards();
    document.getElementById("resetBtn").addEventListener("click", function () {
        var cards = document.querySelectorAll(".card");
        document.getElementById("text").innerHTML = "";
        document.getElementById("text").classList.remove("active");
        cards[0].classList.remove("active");
        cards[1].classList.remove("active");
        cards[2].classList.remove("active");
        document.getElementById("cover").classList.remove("uncover");
        getCards();
    })
})