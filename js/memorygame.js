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
        this.shuffleCards(this.cardsImage)
    }

    listImagesCard() {
        this.cardsImage = [
            {"id": 1, "name": "images/4.png"},
            {"id": 2, "name": "images/40.png"},
            {"id": 3, "name": "images/10.png"},
            {"id": 4, "name": "images/1.png"},
            {"id": 5, "name": "images/4.png"},
            {"id": 6, "name": "images/3.png"},
            {"id": 7, "name": "images/32.png"},
            {"id": 8, "name": "images/51.png"},
            {"id": 9, "name": "images/8.png"},
            {"id": 10, "name": "images/33.png"},
            {"id": 11, "name": "images/53.png"},
            {"id": 12, "name": "images/35.png"},
            {"id": 13, "name": "images/20.png"},
            {"id": 14, "name": "images/50.png"},
            {"id": 15, "name": "images/46.png"},
            {"id": 16, "name": "images/47.png"},
            {"id": 17, "name": "images/29.png"},
            {"id": 18, "name": "images/43.png"},
            {"id": 19, "name": "images/5.png"},
            {"id": 20, "name": "images/52.png"}
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

        console.log(this.cardsImage[1], '123')

        for(let a = 1; a <=2; a++){
            this.shuffleCards(this.cardsImage).each( (item, i) => {
                console.log(item, i)
                this.contentFrontBackCard = new Element("div", {
                    "class": "contentCard",
                    "data-id": item.id,
                    "data-select": a,
                    "events": {
                        "click": (ev) => {
                            this.flipCard(ev);
                            this.isValidOptions()
                        }
                    }
                }).adopt(
                    new Element('div', {
                        "class": "front"
                    }),

                    new Element('div', {
                        "class": "back",
                        "styles": {
                            "background": "url('"+item.name+"') no-repeat center center"
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