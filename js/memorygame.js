window.addEvent('domready', () => {
    new MemoryGame();
});

Array.prototype.shuffle = function(){
    for (var i = 0; i < this.length; i++){
        var a = this[i];
        var b = Math.floor(Math.random() * this.length);
        this[i] = this[b];
        this[b] = a;
    }
}

class MemoryGame {
    constructor() {
        this.listImagesCard();
        this.createCardElement();
        this.insertCard();
    }

    listImagesCard() {
        this.cardsImage = [
            "images/4.png",
            "images/40.png",
            "images/10.png",
            "images/1.png",
            "images/4.png",
            "images/3.png",
            "images/32.png",
            "images/51.png",
            "images/8.png",
            "images/33.png",
            "images/53.png",
            "images/35.png",
            "images/20.png",
            "images/50.png",
            "images/46.png",
            "images/47.png",
            "images/29.png",
            "images/43.png",
            "images/5.png",
            "images/52.png"
        ];
    }


    shuffleCards(array) {

        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    flipCard(ev) {
        ev.target.getParent().addClass("flip");
        setTimeout( () => {
            ev.target.getParent().addClass("active");
        }, 250);

    }

    isValidOptions(ev) {
        console.log(ev);
    }

    createCardElement() {
        this.card = new Element("div", {
            "class": "container-card"
        });

        for(let a = 1; a <=2; a++){
            this.shuffleCards(this.cardsImage).each( (item, i) => {
                this.contentFrontBackCard = new Element("div", {
                    "class": "contentCard",
                    "events": {
                        "click": (ev) => {
                            this.flipCard(ev);
                            this.isValidOptions(ev)
                        }
                    }
                }).adopt(
                    new Element('div', {
                        "class": "front",
                        "id": i
                    }),

                    new Element('div', {
                        "class": "back",
                        "data-id": i,
                        "styles": {
                            "background": "url('"+item+"') no-repeat center center"
                        }
                    })
                ).inject(this.card)
            });

            this.insertCard(this.card);
        }
    }

    insertCard(el) {
        $("receive-card").adopt(el)
    }
}